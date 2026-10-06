# U1 §8 Closure — Round 3 Rework 1 Build Directive (R-1 row closure; owner-ruled design)

Standing constraints apply — `plugins/foreman-line/docs/kickstarters/STANDING-CONSTRAINTS.md`
(read via `git show` at the coordinator commit named below). You are a builder, not a
reviewer: you implement and commit locally, and you never grade your own work. The closure
review is a separate identity (`openai/gpt-6-astra`, owner-named 2026-10-03) that sees only
your committed output.

This directive inherits **everything not overridden here** from the round-3 build
directive `plugins/foreman-line/docs/kickstarters/foreman-kernel-build-U1-round3.md` —
limits, commit hygiene, sweep mandate, notes-file discipline, stop conditions and
completion-claim shape all carry over unchanged. Read it alongside this file.

## STEP 0 — RESTATE AND STOP. NO CODE BEFORE COORDINATOR CONFIRMATION.

Your first action is to restate, then stop and wait:

1. R-1's row-closure invariant (all four clauses) and the owner ruling of 2026-10-06 in
   your own words (`U1-round3-rework1-owner-ruling-2026-10-06.md`).
2. The exact Allowed Files you will touch (enumerate; name any new probe files inside
   `u1-round3-checks/`).
3. Where the three a29 positive-case inputs live, and exactly how their re-basing to the
   unbound shape changes them (names and ACCEPT outcomes must not change).
4. Your branch and worktree (below), dependencies, base commit `8fe7067`.
5. The contract you must not break (no contract/oracle/amendment text changes at all).
6. How you will verify — exact local commands; for each new registered case, how it is
   **failing-when-broken** (mutation probe: break the check, named case goes red, revert).
7. Every flag: anything the ruling or triage gets wrong, cannot be implemented inside
   Allowed Files, or that would change contract semantics (R-1 cl.3's stop condition).

**Write nothing to any file until the coordinator confirms.**

## Worktree and branch — named, not ambient

- **Worktree:** `D:/Repos/agent-skills-worktrees/u1-closure-round3`
- **Branch:** `codex/u1-closure-round3`
- **Base commit:** `8fe7067` (the closure-checked Phase-A completion claim). Worktree is
  clean at base except untracked `u1-round3-checks/__pycache__/` — never commit it.

Never touch the ambient `D:/Repos/agent-skills` checkout (do not read from it or write to
it). Never touch another worktree. Read coordinator-record documents with
`git show <coordinator-sha>:<path>` from inside your worktree (same object store).

## Owner ruling (2026-10-06) — binding design for this rework

Full text: `U1-round3-rework1-owner-ruling-2026-10-06.md` (coordinator branch; read via
`git show`). In summary: **shape rule now, oracle amendment to Phase B.**

1. Implement R-1's **row closure** in `.github/workflows/u1-verify.yml` per the triage's
   ruling R-1 (`U1-round3-review-triage-2026-10-05.md`, rework-authorization block):
   - every fixture-evidence row bound to exactly one oracle-named case/row identity as
     recorded in the bundle; every oracle-named case evidenced by exactly one qualifying
     row bearing that case's own identity;
   - a permitted-gap row may excuse **only its own named gap case's slot** — never stand
     in for, displace, or suppress any other case's row; the exact-triple match stays
     necessary but is not sufficient;
   - refused `INVALID`/`U1_ARTIFACT_INVALID` (align with the ratified error mapping;
     **stop and report if that would change contract semantics**): failing-row→gap
     relabel, controlId/identity-rename laundering, duplicate identity, stray rows,
     **bound gap rows (a permitted-gap row that also carries `invariantIds`/`controlId`)**,
     hidden row keys;
   - no legitimate bundle regresses: every currently-passing registered case and fixture
     keeps passing.
2. Re-base the **three existing a29 positive-case inputs** to the unbound shape (bound gap
   rows → unbound). Names and ACCEPT outcomes unchanged. This is the only authorized input
   change. If any of those inputs lives outside the Allowed Files below, **stop and report**
   — do not widen the set yourself.
3. New registered cases in `drive_a29.py`/`drive_a28.py` (your choice, amendment-bound),
   each **failing-when-broken** and mutation-probed: (a) exact-triple gap relabel +
   fabricated replacement row → refused; (b) controlId-rename laundering → refused;
   (c) stray/unknown-controlId rows → refused; plus the bound-gap-row refusal the ruling
   adds.
4. Doc fixes A-F3/A-F4 (byte-true citation — no spurious trailing `\n` in §5's
   A-U1.8.28 cl.4 byte citation; §1 FL-2 wording must match the bytes), and **§5's
   A-U1.8.29 coverage stated truthfully** (no overstatement; the re-based inputs and the
   new cases named exactly).
5. Notes must state: the trace-less relabel form (invariantIds dropped) is a named residual
   covered **only** by the ratified E-2 §9.2 limitation (candidate-supplied signals), and
   full oracle-named-cases closure is carried as a **Phase-B amendment candidate** alongside
   the A-U1.8.38 re-pin. Both belong in the exit-annex residuals list too.

## Allowed Files (exact; everything else is Forbidden)

Modify:

- `.github/workflows/u1-verify.yml`
- `plugins/foreman-line/bypass-outage-harness/u1-round3-checks/**` (existing driver/helper
  files; new probe/driver files only, named at Step 0)
- `plugins/foreman-line/docs/goals/foreman-kernel/U1-round3-implementation-notes-2026-10-03.md`

Forbidden in particular: `U1-verifier-pin.json`, `U1-configuration-checklist.json`,
`u1-fixture/**`, `promotion-requests/**`, `u1-produce.yml`, `u1-lint.yml`,
`u1-sandbox.mjs`, the contract, every ratified amendment document, `docs/specs/**`, and
anything in the ambient checkout. (If the row-closure implementation genuinely cannot fit
in `u1-verify.yml` alone, stop and report — do not take another file.)

## Tripwires (from the triage; violations are stop-and-report)

- Registered cases strictly **≥ 1128**, additions only. The three re-based a29 inputs keep
  their names and outcomes — an input change is not a case removal; re-issue their names in
  the completion claim.
- Per-driver floors never weaken; every pre-existing case keeps its outcome.
- **One** final full run (`py -3 run_all.py`) after the last code change; report exact
  outcomes without retrying.
- The completion claim is re-issued with exact counts.

## Verification (after Step 0 confirmation)

Per-driver runs; final full run once; `lint_embedded`; `node --check u1-sandbox.mjs`;
`git diff --check`; mutation proofs for every new case (break the check → the named case
fails → revert; report all three states). Commit hygiene from the parent directive applies
verbatim: checkpoints, never mask `git add` output, validate pathspecs, end every commit
with `git status --porcelain` and report it.

## Limits — unchanged, nothing here is optional

No `git push`, no PR, no tag, no remote ref change; no `gh`/`az` at all; no live workflow
run; no `u1-fixture` provisioning (owner-HELD); no pin update; no ruleset/environment/
credential change; no contract or consumer-rule text edits; `__pycache__` never committed
(removal at post-smoke cleanup). Phase-B acts (live dry runs, fixture, re-pin, record
landing, oracle amendment) remain owner-gated.

## Completion claim (required shape)

Commit everything (clean `git status --porcelain`), then report: final branch HEAD SHA;
the exact registered-case count and per-driver counts (additions listed); the three re-based
a29 inputs named with before/after shapes; a per-case table for every new case
(`case | attack | expected code | mutation probe | result`); every command run with exit
code; `lint_embedded`/`node --check`/`git diff --check` output; the residual list (E-2 §9.2
trace-less form; Phase-B oracle-amendment candidate). Do not claim closure on reading
alone.
