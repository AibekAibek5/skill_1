---
name: requirement-traceability
description: Adds opt-in IDs to a spec's success criteria and ties each ID to a tagged test, so a script reports every ID with no test instead of a reviewer judging coverage. Use when a spec already carries IDs like CPN-3:, or when the user asks for traceability or a requirement coverage check.
---

# Requirement Traceability

## Overview

An opt-in convention. A spec that carries IDs turns it on for `test-driven-development`, `incremental-implementation` and `code-review-and-quality`; a spec without IDs changes nothing. Each requirement gets an ID, each task lists the IDs it makes testable, each test is tagged with its ID, and a script reports every ID that has no test.

## When to Use

- The user asks to add traceability to a spec, or to check requirement coverage
- A spec already carries IDs (`1. CPN-1: ...`) and you are building or reviewing against it
- The user asked for traceability: annotate right after `/spec` and `/plan`, before any `/build`

**When NOT to use:** the spec has no IDs and the user did not ask for them. Say so in one line and stop. Never add IDs the user did not ask for.

Tell whether a spec carries IDs with one grep:

```bash
grep -qE '^[[:space:]]*[0-9]+\.[[:space:]]+[A-Z]{2,5}-[0-9]+:' SPEC.md
```

## Annotate a Spec and Its Tasks

Run once, after the spec and plan exist, before building. `spec-driven-development` and `planning-and-task-breakdown` only point here; this step does the annotating.

1. Choose the KEY (below) and add a `Requirement key:` line above the spec's **Success Criteria**.
2. Put an ID on each criterion. Split compound ones: one behaviour per ID.
3. Add the seam table to the spec's **Testing Strategy**. Report any ID in no row: that is a gap, visible before any code.
4. Add a `Covers:` line to each task (the [task line](#task-line)), then run the [structural check](#structural-check) and fix what it reports yourself. Ask the user only about an ID that fits no task at all: that is a slicing gap. With no task list (a one-session build), skip this step: every ID is checked at the end.

Write the changes back where the spec and tasks live: `SPEC.md` and `tasks/todo.md`, or the tracker the plan designates. Then show the user, verbatim, each annotated criterion (`1. CPN-1: ...`) and each task's `Covers:` line under the task's name. This is a report, not a question.

## Requirement ID

Format `<KEY>-<n>`, like `CPN-3`. `KEY` is 2 to 5 uppercase letters chosen per spec. A bare `R3` would collide across specs and count another spec's test as coverage.

**The ID is always followed by a colon, and every match anchors on the colon.** `CPN-1` is a prefix of `CPN-10`, so a match without the colon reports an untested `CPN-1` as covered the moment `CPN-10` gets a test. Silent false coverage is the failure this convention exists to prevent. Grep `"CPN-3:"`, never `"CPN-3"`. Quote the colon in runner filters: `-t "CPN-3:"`.

```
Requirement key: CPN

1. CPN-1: A shopper can apply a coupon at checkout and pays the discounted total.
2. CPN-2: An expired coupon is rejected with a reason.
```

Never renumber or reuse an ID. A withdrawn one stays and is marked `(dropped)` right after the colon: `3. CPN-3: (dropped) ...`.

**Choose the KEY before writing.** Grep for KEYs already in use:

```bash
grep -rhoE '\b[A-Z]{2,5}-[0-9]+:' --exclude-dir={node_modules,.git} \
  --include='*.md' --include='*.ts' --include='*.tsx' --include='*.js' --include='*.py' . \
  | sed -E 's/-[0-9]+:$//' | sort -u
```

This sees KEYs in tests and in specs committed to the repo, not in a tracker, so it is best-effort. The `Requirement key:` line records the spec's own KEY so a reader can see what is taken.

## Seam Table

In the spec's **Testing Strategy**, map each seam to the IDs it covers:

```
| Seam | Requirement IDs |
| --- | --- |
| POST /checkout | CPN-1, CPN-2 |
| waived: needs a real payment provider | CPN-4 |
```

An ID that will not be tested gets a `waived: <reason>` row. A requirement is waived explicitly, never dropped silently.

## Test Tag

The test name starts with its ID and a colon: `CPN-3: rejects expired coupons`. Where the language cannot put it in the name (a Python function), make it the first line of the test's docstring.

One behaviour per ID does not mean one test per ID. Tag every test of a requirement (main case, edge cases, errors) with the same ID. The gap check needs at least one.

## Task Line

When the spec has IDs, each task carries a line `Covers: CPN-1, CPN-4` (or `**Covers:** CPN-1, CPN-4`, matching the plan's bold fields), and every ID lands on exactly one task's `Covers:` line.

`Covers:` means **the IDs this task makes fully testable**, not the IDs it touches. A requirement built across two tasks goes on the last one in dependency order only, so the earlier task's check passes honestly.

### Structural Check

Every defined ID on exactly one task, and no task naming an ID the spec does not define. Waived IDs still land on a task; dropped ones on none. With tasks in a tracker, save them to a file first:

```bash
SPEC=SPEC.md
TASKS=tasks/todo.md
T=$(mktemp -d)
grep -v '(dropped)' "$SPEC" | sed -nE 's/^[[:space:]]*[0-9]+\.[[:space:]]+([A-Z]{2,5}-[0-9]+:).*/\1/p' | sort -u > $T/defined
grep -hE '^(\*\*)?Covers:' "$TASKS" | grep -oE '[A-Z]{2,5}-[0-9]+' | sed 's/$/:/' | sort | uniq -c > $T/counts
awk '{print $2}' $T/counts > $T/covered

echo "ON NO TASK:";     comm -23 $T/defined $T/covered
echo "ON SEVERAL:";     awk '$1 > 1 {print $2}' $T/counts
echo "UNDEFINED ID:";   comm -13 $T/defined $T/covered
```

Fix each class yourself, then re-run until all three are empty:

- **On several**: keep it on the last of those tasks in dependency order; remove it from the others.
- **Undefined ID**: a typo or a dropped ID. Correct it or remove it.
- **On no task**: add it to the task that completes it. Only when no task builds that behaviour at all, ask the user.

## Coverage Gap Check

Run [scripts/check.mjs](scripts/check.mjs) (Node, no packages) from the repo root. For a spec held in a tracker, save it to a file first, or pass `-` to read stdin:

```bash
node skills/requirement-traceability/scripts/check.mjs SPEC.md [ID...]
```

It exits 1 when any ID is untested, and prints three classes:

- **Untested**: a defined, non-waived ID with no tagged test. This fails the check.
- **Undefined ID**: a tagged test with the spec's KEY whose ID the spec does not define (or has dropped). Warn: a typo or a stale test. Other specs' KEYs are ignored.
- **No ID**: a test with no ID, as `file:line:text`, in a file that holds this spec's tagged tests. Warn: possible scope creep, or a test worth tying to a requirement.

IDs are compared whole, colon included. A quoted ID counts only where a test name sits: the first argument of `it(`, `test(` or Go's `t.Run(`, or the first line of a `def test_` docstring. An ID inside an assertion value is not coverage. In other languages any quoted string that starts with an ID counts, so keep IDs out of string literals that are not test names. A commented-out or skipped test is not coverage, so its ID is reported untested. JS/TS, pytest and Go work without configuration.

For one task's check, pass the IDs on its `Covers:` line. Waived IDs are still subtracted:

```bash
node skills/requirement-traceability/scripts/check.mjs SPEC.md $(grep -E '^(\*\*)?Covers:' task.md | grep -oE '[A-Z]{2,5}-[0-9]+')
```

**The whole-spec check is required once per spec**: when the task being built is the last one still open (counting the current task as done), run the check unnarrowed. It must pass before review. It catches what a per-task check cannot: an ID whose `Covers:` line sat on a task that never wrote its test, or a test removed by a later task. With no task list, every check is already unnarrowed.

When other tasks are still open, say in one line that the whole-spec check did not run and name them.

The check confirms presence only. Whether a tagged test asserts what its requirement says is judgement: `code-review-and-quality` reads the tests against the spec as it always does.

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "The tests obviously cover the spec" | "Obviously" is the judgement call this skill replaces. The script lists the IDs with no test. |
| "I'll match `CPN-3` without the colon, it's simpler" | `CPN-1` then matches `CPN-10`, and an untested requirement reports as covered. |
| "This requirement can't be tested, I'll drop it" | Waive it with a reason in the seam table. A silent drop is invisible in review. |
| "One test is enough for this ID" | Enough for the gap check, not for the behaviour. Tag the edge-case and error tests too. |
| "The whole-spec check is redundant, every task passed" | Per-task checks cannot see a test a later task removed or a `Covers:` line on a task that never wrote its test. |

## Red Flags

- IDs added to a spec the user did not ask to annotate
- An ID matched without its colon in a grep or runner filter
- An ID on no task, or on several
- A `Covers:` line listing IDs the task only touches
- A requirement dropped from the spec instead of marked `(dropped)` or waived
- The last task closed without the unnarrowed whole-spec check

## Verification

- [ ] The spec has a `Requirement key:` line and every criterion has an ID
- [ ] Every ID is in a seam-table row, or in a `waived:` row with a reason
- [ ] The structural check prints nothing under all three headings
- [ ] `check.mjs` exits 0 for the current task's IDs (output shown)
- [ ] On the last task, `check.mjs` exits 0 unnarrowed
