# Foreman Kernel — resume record — 2026-10-04

## Owner decisions

- The owner ratified the exact Phase-A path grant for A-U1.8.39 E-4: `promotion-requests/u1-control-production-incomplete/promotion-request.json` and `expected-outcome-oracle.json`. A-U1.8.40 records this grant at commit `258613a` in the isolated coordinator branch. This authorizes only those two paths; it does not accept existing parcel contents or authorize Phase B.
- The owner chose an isolated coordinator worktree. The previously recorded `foreman-kernel-stage0-20260830` worktree and `codex/foreman-kernel-stage0-20260830` branch were absent. The replacement is `D:/Repos/agent-skills-worktrees/foreman-kernel-coordinator-20261004`, branch `codex/foreman-kernel-coordinator-20261004`, created from observed `dev` commit `733cd23dd163e517e4fe666554117d5cb1324fe1`. The initial checkout timed out at 120 seconds with five Windows filename-too-long errors; the remaining checkout was restored with `core.longpaths=true`. Its current status has five unstaged modified files under `plugins/synced/`; they are excluded from commits and left untouched. No ambient checkout files were copied.

## Recovery evidence

- The prior U1 round-3 builder was not registered as running in this session; the associated `u1r3final`, `u1r3mut`, and `u1r3-final-suite` services were exited. No completion claim was delivered.
- The parcel branch is `codex/u1-closure-round3` at `fe659df127157484c1392d4a08a3118c369f0579`, based on `ed848ba0595f7c8f6e01c1655babc725a73c2ef2`. A fresh read-only Step 0 recovered the exact kickstarter and ratified amendment/errata objects, audited the changed paths, and identified the two newly authorized control-request files. All existing parcel-branch work remains **UNCLAIMED**; no implementation or evidence is accepted.
- Parcel worktree residue observed: modified `u1-round3-checks/drive_a28.py` and `drive_a31.py`, plus untracked `u1-round3-checks/__pycache__/u1r3_extract.cpython-313.pyc`. The existing implementation notes still describe Wave 2 as held and are stale relative to A-U1.8.39. None was edited or cleaned by the coordinator.
- Last available service output, not rerun and not current-source verification: A-U1.8.28 driver 251/258 (seven persist-script harness failures before their intended assertion because `PROMOTION_REQUEST_ID` was unset); A-U1.8.30 19/19; mutation driver 40/41 (the `collector per-file digest unchecked` mutant survived despite service exit 0); embedded lint 13 blocks/0 failures; whole suite exit 1. There is no current-source test count and no passing full-suite claim.
- No build, lint, test, formatter, workflow, `gh`, `az`, push, PR, tag, cloud/GitHub mutation, or fixture provisioning was performed by this coordinator.

## Next action and limits

Coordinator ruling `96b3e89` classifies A-U1.8.34’s live records, §9.2 text and sunset as Phase-B owner-gated; they do not block Phase-A workflow work, and the contract/consumer rule remains forbidden. The recovery builder’s one pre-fix full-suite attempt timed out at 3600 seconds with no exit and no source edits. It must not rerun that baseline merely to confirm; final local verification is required once after all code changes. The coordinator authorized continuation and sent that ruling to the active builder. No completion claim or new code commit is yet reported; all parcel work remains unclaimed. Next: let the builder complete, then coordinator closure-check its exact committed claim before any final deterministic pass/review. Phase-B/fixture/re-pin/live-owner gates remain unchanged.
