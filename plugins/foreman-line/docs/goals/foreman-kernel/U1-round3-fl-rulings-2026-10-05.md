# U1 §8 round 3 — coordinator FL rulings and Phase-2 release — 2026-10-05

**Instrument:** coordinator rulings on the fresh builder Step-0 flags FL-1…FL-6
(`fk-loop-resume-record-2026-10-05.md` dispatch), and the Phase-2 release decision.
**Step 0 status:** **ACCEPTED** for Phase-2 execution. The restatement matches
`U1-round3-step0-ruling-2026-10-04.md` and A-U1.8.28–40 on scope, Allowed Files, worktree/branch/
base, verification plan, and out-of-scope items. All inventory claims were spot-checked against
git objects (`ed848ba..53adfa9` 39 changed paths, none outside Allowed Files; no `__pycache__`
committed). No code was written before this confirmation.

## Flag rulings

| Flag | Ruling | Disposition |
|---|---|---|
| FL-1 (E-1.4 "six -r3 directories" vs tree) | The tree is authoritative: the authorized non-historical set is exactly seven directories — `u1-fixture-positive-r3`, the four `u1-fixture-neg-*-r3`, `u1-fixture-neg-runid-newline`, and the A-U1.8.40 pair `u1-control-production-incomplete`. E-1.4's "six named `-r3` request directories" is a descriptive miscount (the newline-negative directory is the sixth request case, named without the suffix per the `u1-fixture-neg-*` rule). **No renames, no directory additions.** Any additional request-case directory requires a new ratified amendment. | accept-as-documented; builder records the exact seven-directory set in the implementation notes |
| FL-2 (FLOOR column 560 vs committed 150) | The ruling table's **Registered cases** counts are the binding tripwire baseline (598/27/35/56/50/27/90/69/101/29/41; total 1123). The "Existing FLOOR" column is historical and non-binding (its 560 was a miscount). FLOORs raised to the registered-case counts in `53adfa9` are **accepted** — stricter than the ruling, no weakening. | accepted; `--list` counts on current bytes must match exactly before any rework claim |
| FL-3 (H-15 "runs on pull_request" sub-claim contradicted) | The sub-claim is void as cited. E-6 governs: the `u1-lint` push filter stays literal `main`, and no trigger edit is authorized or needed. No work item may rest on the void sub-claim. | accept-as-documented; zero trigger edits |
| FL-4 (H-15 `L2465` citation matches no defect; H-11 `L2082` ±1) | The `L2465` citation is **void** — any work that would cite it stops (none is authorized). H-11's ±1 drift is immaterial: the anchor content is confirmed at `L2081`. | accept-as-documented; no work may cite `L2465` |
| FL-5 (commit-subject mislabel) | Informational only. No authority derives from commit subjects; the amendment text governs. | informational |
| FL-6 (F8/F15 unconfirmed) | Confirmed: F8 and the F15 mapping remain **unconfirmed** without the original Step-0 flag record. Work only to ratified A-U1.8.28–40 text; the notes' F15 claim confers nothing. | honored as stated |

## Phase-2 release

The builder is released to complete Phase A inside the ruling's Allowed Files, against this work
plan (the Step-0 remaining-gap list, in order):

1. Registered-case tripwire on current bytes: `py -3 run_all.py --list --only <driver>` per driver,
   exact counts ≥ the 1123 baseline, no driver below its registered count.
2. Per-driver runs; close implementation gaps to ratified text only (notably: zero a28 setup
   failures, and the `collector per-file digest unchecked` mutant must die).
3. Update the named implementation-notes file to an evidence record: per-clause map
   (A-U1.8.28 … E-6 → file:line + named case + evidence), Wave-1/Wave-2 status truth, the
   FL-1…FL-6 dispositions above, and the Phase-B carry-over list (provisional `trustPolicyDigest`
   values, `U1-verifier-pin.json` checklist staleness, the `u1-control` oracle's PROVISIONAL
   `expectedReasonCodeSet`, the nine unrecorded checklist rows).
4. Final local verification **once** after all code changes: per-driver runs as needed; at most one
   full `py -3 run_all.py` attempt — if it cannot complete, report the exact outcome (exit code,
   counts, last output) **without retrying**; plus `lint_embedded.py`, the actionlint/pyflakes
   checks the lint mirror models, `node --check u1-sandbox.mjs`, `git diff --check`.
5. Completion claim: exact counts, mutation result (all 41 mutants must be killed), evidence
   pointers, and an explicit statement of every unmet item. Wrong-shaped or partial claims are
   presumptively empty.

## Limits (unchanged)

No push, PR, tag, remote ref, `gh`/`az`, workflow dispatch, live GitHub/Azure change, `u1-fixture`
provisioning, pin update, or merge. No contract/consumer-rule text edits. `__pycache__/` is never
committed and is removed at post-smoke cleanup. Commit discipline: each substantive fix as its own
commit; nothing outside the Allowed Files in any commit. The closure-review identity remains
`openai/gpt-6-astra` (Phase-B gated).
