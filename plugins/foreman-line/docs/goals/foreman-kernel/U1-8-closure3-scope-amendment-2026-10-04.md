# U1 §8 closure round 3 — scoped file-authority amendment A-U1.8.40 — 2026-10-04

**Instrument:** amendment **A-U1.8.40**, to the Phase-A Allowed Files contract for round 3.
**Status:** **RATIFIED** by the owner on 2026-10-04, selecting “Ratify the two exact files” in response to the coordinator’s scope question.
**Base:** A-U1.8.28–38 (`0b51d85416f2e6f2d7ad27f16c238bd687fe2172`), as corrected by A-U1.8.39 (`0e8d97a8de82d4684475e78dcd69a12b57d44f1`).
**Write boundary:** this document only.

## Exact scoped grant

The Phase-A round-3 builder may create or modify only these two additional files, to realize the A-U1.8.39 E-4 `u1-control-` production-container INCOMPLETE control:

- `plugins/foreman-line/docs/goals/foreman-kernel/promotion-requests/u1-control-production-incomplete/promotion-request.json`
- `plugins/foreman-line/docs/goals/foreman-kernel/promotion-requests/u1-control-production-incomplete/expected-outcome-oracle.json`

This is a narrow exception to the round-3 builder directive’s restriction that new request-case directories use the `u1-fixture-neg-*` prefix. No other file in this directory, no additional `u1-control-*` directory, and no other path is authorized by this amendment. All other Allowed Files, Forbidden paths, request-digest requirements, and Phase-A constraints remain unchanged.

## Non-retroactivity and gates

The owner’s selection authorizes these exact paths; it does not accept or certify existing branch contents. The current parcel branch remains unclaimed. A fresh builder must restate this amendment at Step 0, inspect the two existing files against A-U1.8.39 E-4, inventory their changes and evidence, and stop for the coordinator’s ruling before code or any other modification. No file in the new grant may be treated as complete without that claim and subsequent coordinator closure check.

A-U1.8.40 authorizes no push, PR, tag, remote ref change, `gh`/`az` call, live workflow dispatch, Azure/GitHub mutation, `u1-fixture` provisioning, pin update, or Phase-B act. The existing `u1-fixture` provisioning hold and reviewer identity `openai/gpt-6-astra` remain unchanged.
