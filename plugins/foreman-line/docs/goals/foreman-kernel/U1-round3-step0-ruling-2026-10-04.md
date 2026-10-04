# U1 §8 round 3 — coordinator Step 0 ruling — 2026-10-04

**Decision:** Step 0 accepted for resumed Phase-A work, subject to the exact boundaries and pre-edit checks below. This is not acceptance of the existing parcel branch contents or a completion claim. A fresh builder may proceed only in the named parcel worktree/branch and only within this ruling. Any new product decision, unapproved path, or mismatch against pinned source stops before the affected edit.

## Authority and paths

The binding implementation contract is A-U1.8.28–38 at `0b51d85416f2e6f2d7ad27f16c238bd687fe2172`, corrected by A-U1.8.39 at `0e8d97a8de82d4684475e78dcd69a12b57d44f1`, plus A-U1.8.40 at `258613a`. The continuation record is coordinator-only, not a builder input. Current parcel HEAD remains `fe659df127157484c1392d4a08a3118c369f0579`, base `ed848ba0595f7c8f6e01c1655babc725a73c2ef2`; all prior parcel work remains unclaimed until reviewed on disk.

A-U1.8.40 authorizes prospectively only:

- `plugins/foreman-line/docs/goals/foreman-kernel/promotion-requests/u1-control-production-incomplete/promotion-request.json`
- `plugins/foreman-line/docs/goals/foreman-kernel/promotion-requests/u1-control-production-incomplete/expected-outcome-oracle.json`

The current bytes are not accepted by presence alone. A-U1.8.39 authorizes only the six named `-r3` request directories and the newline-negative directory it specifies; historical `-r1`/`-r2` records remain untouched.

The exact local-only verification aids proposed at Step 0 are approved inside the one permitted directory `plugins/foreman-line/bypass-outage-harness/u1-round3-checks/`:

`README.txt`, `consumer_gate.py`, `drive_a28.py`, `drive_a29.py`, `drive_a30.py`, `drive_a31.py`, `drive_a32.py`, `drive_a33.py`, `drive_a35.py`, `drive_a36.py`, `drive_a37.py`, `drive_a39.py`, `drive_mut.py`, `drivelib.py`, `lint_embedded.py`, `run_all.py`, `u1r3_extract.py`, `u1r3_pipeline.py`, `u1r3_records.py`.

These are throwaway offline test aids, not production workflow code. `consumer_gate.py` is only a reference test of the ratified consumer predicate; it is not FK-P19 implementation or evidence of a real consumer. The generated `__pycache__/` is excluded from Allowed Files and from every commit; remove it during post-smoke cleanup.
The pre-existing dirty `drive_a28.py` and `drive_a31.py` are within these approved names but their contents remain unclaimed. The recovery builder may inspect and retain or adjust them only against their ratified amendments; do not stage them blindly or discard them. Their registered-case baselines remain 598 and 56 respectively.

All other kickstarter Allowed Files remain unchanged: the three U1 workflows, `u1-sandbox.mjs`, only the five existing fixture-evidence JSON files, amendment-named request/oracle records, checklist `reobservedBy` only, and the named implementation-notes file. Pin, contract, amendment sources, routing policy, specs, other directories and all external surfaces remain forbidden.

## Registered-case tripwire baseline

`py -3 run_all.py --list --only <driver>` returned direct exit 0 for each driver. This lists registered case names; `run_all.py` skips the case-callable loop in `--list` mode. **No hostile-input callable ran; this is inventory, not a passing test.** These counts are the minimum tripwire baseline for any later rework round:

| Driver | Registered cases | Existing `FLOOR` |
|---|---:|---:|
| `drive_a28` / A-U1.8.28 | 598 | 560 |
| `drive_a29` / A-U1.8.29 | 27 | 10 |
| `drive_a30` / A-U1.8.30 | 35 | 12 |
| `drive_a31` / A-U1.8.31 | 56 | 10 |
| `drive_a32` / A-U1.8.32 | 50 | 22 |
| `drive_a33` / A-U1.8.33 | 27 | 14 |
| `drive_a35` / A-U1.8.35 | 90 | 14 |
| `drive_a36` / A-U1.8.36 | 69 | 30 |
| `drive_a37` / A-U1.8.37 | 101 | 22 |
| `drive_a39` / A-U1.8.39 E-4.2 | 29 | 10 |
| `drive_mut` / mutation | 41 | 20 |
| **Total** | **1123** | — |

## Flags, pre-edit checks, and evidence status

A-U1.8.39 E-1–E-6 and A-U1.8.40 govern the round-3 corrections; no unstored Step-0 label grants authority. The durable notes record a prior F15 claim (“producer byte-identical encoder claim left alone”), but A-U1.8.39 E-5.1 addresses producer enrichment and required feed fields, not that encoder claim. Without the original Step-0 flag record, both F8 and the specific F15 mapping/ruling remain **unconfirmed**; do not infer approval from the notes. Work only to ratified .28–.40 text; any requirement beyond it stops for owner ruling.

Before editing code that corresponds to a cited finding, the builder must verify the exact `ed848ba` source lines required by the kickstarter. The recovery reports did not independently reconcile all H-1–H-15 anchors, especially producer-side H-5, endpoint H-6, producer-probe H-11, and H-14/H-15. Verify those references from the pinned base bytes, never current HEAD. A mismatch stops the affected work before modification.

Historical exited-service results only—not current verification: A-U1.8.28 251/258 with seven setup failures caused by missing `PROMOTION_REQUEST_ID`; A-U1.8.30 19/19; mutation 40/41 with the collector per-file digest mutant surviving; embedded lint 13 blocks/0 failures; full suite exit 1. No current-source pass/fail suite result exists. The coordinator reran no tests, build, lint, or formatter.

## Phase-B stop conditions remain

No push, PR, tag, remote ref, `gh`, `az`, workflow dispatch, live Azure/GitHub change, fixture provisioning, pin update, or merge is authorized. `u1-fixture` remains owner-held; nine checklist facts remain unrecorded; A-U1.8.34 live facts, A-U1.8.37 clause 1 landing, A-U1.8.38 re-pin/live evidence, and the independent closure review remain gated. The closure-review identity remains `openai/gpt-6-astra`.

## Recovery-builder ruling — 2026-10-04

The recovery builder made one pre-fix `py -3 run_all.py` attempt; it timed out after 3600 seconds with no exit code and made no file changes. Treat that as a red/incomplete baseline, not a pass. Do not rerun it merely to confirm the timeout. The earlier exited-service failures remain historical. After all code changes, run the required final local verification once; if it cannot complete, stop and report the exact outcome without retrying.

A-U1.8.34's live records, §9.2 statement and sunset are explicitly Phase-B/owner-gated in the kickstarter; A-U1.8.39 E-2 says the limitation text lands with Phase-B contract transcription. They do not block the Phase-A workflow implementation. Do not edit the contract or consumer-rule text. Continue only inside the approved Phase-A Allowed Files; any additional path/decision still stops before its affected edit.
