# U1 §8 round 3 — rework 1 — Step-0 rulings — 2026-10-06 (accept Step 0, release the builder)

Builder session `01a111dc-54aa-76d3-8d66-cbe0f9517cfd` delivered its Step-0 restate and
stopped with zero writes (worktree clean at `8fe7067` except `u1-round3-checks/__pycache__/`).
**Step 0 is accepted** — the R-1 construal, the owner-ruling reading, the Allowed Files plan
(4 files, all in-fence) and the a29 input locations are accurate. The builder is released
to implement under these rulings on its nine flags.

## Rulings on the nine flags

**F1 — exit-annex residuals are outside Allowed Files.** CONFIRMED: record both residuals
in notes §6 marked "for exit-annex landing"; the coordinator lands
`fk-exit-annex-draft-2026-09-27.md`. Do not write the annex.

**F2 — "hidden row keys" definition.** CONFIRMED as the builder's three-part reading, all
refused: (a) row keys starting with `_`; (b) a row document carrying more than one of
`cases`/`rows`/`controls`; (c) non-object entries in a row list. These are smuggling
channels for rows outside the accounting — the laundering class R-1 names. The rule only
adds refusals; R-1 cl.4 (nothing legitimate regresses) is the check on it.

**F3 — closure level the bundle bytes support.** CONFIRMED as stated: controls — exactly
one row per `controlId`, unknown/absent/duplicate refused; gap triples — at most one row
each, gaps remain optional; observations — unique `caseId`, every binding inside the
oracle's `invariantExpectations`. Invariant per-case closure (oracle naming FIX-INV case
IDs) is the deferred Phase-B item (owner-ruling item 4), to be named as such in the notes —
not dropped.

**F4 — "outside the named set" = the oracle's named set.** CONFIRMED: refuse bindings
outside the oracle's `invariantExpectations`; do not refuse a row the oracle names
(`INV-U1-06` stays acceptable even though `requiredInvariantIds` is 01–05). Record that
asymmetry in the notes as a named observation for the A-U1.8.38 re-pin review.

**F5 — unbound exact-triple gap rows in either slot.** CONFIRMED: allowed in either slot;
R-1 cl.2's own-slot binding is what forbids displacement, and the ruling narrows nothing
here. (The re-based a29 positives must keep passing in their current positions.)

**F6 — the all-gap-control case's decision status shifts `INCOMPLETE` → `INVALID`.**
CONFIRMED with a condition: "keeps its outcome" means the registered case's pass/fail —
the case must keep passing with its assertions intact, and the decision-status movement is
the designed new refusal biting a hostile fixture. Requirements: name this case in the
notes and record before/after decision status explicitly; list any other pre-existing case
whose decision status shifts the same way in the completion claim; **stop and report** if
any case's assertions depend on the old status.

**F7 — singular `invariantId` counts as binding.** CONFIRMED: a bound gap row includes
either `invariantId` or `invariantIds` (the verifier selects rows by both, L2903/L3048).
This construes the ruling as written; case `bound-3` covers it.

**F8 — actionlint.** CONFIRMED inherited from the parent directive's requirement 7:
`rhysd/actionlint:1.7.12` via Docker over the workflow set, image digest recorded.

**F9 — A-F3/A-F4 fixes.** CONFIRMED exactly as proposed: A-F3's citation re-derived with
`od` before writing (byte-true, no trailing LF); A-F4's FL-2 wording states FLOORs at
baseline counts (a29 27, a31 56, a36 69) vs registered (28/57/72) elsewhere, all ≥
baseline.

**drive_mut.py mutants.** CONFIRMED: additions-only in-memory mutants in `drive_mut.py`
via the existing `TEXT_OVERRIDE` mechanism — a durable failing-when-broken proof beats a
throwaway probe file. The `drive_mut` per-driver floor must not weaken.

## Carried discipline (unchanged)

Tripwires: registered cases ≥ 1128 additions-only (the three re-based inputs keep names
and outcomes — re-issue their names); per-driver floors never weaken; **one** final
`py -3 run_all.py` after the last code change, reported without retrying; completion claim
re-issued with exact counts. Commit hygiene: checkpoints, never mask `git add` output,
validate pathspecs, `git status --porcelain` reported at every commit, `__pycache__` never
committed. Limits: no push/PR/tag/`gh`/`az`/live/provisioning/pin update; no contract,
oracle, amendment, `u1-fixture`, `promotion-requests`, `U1-configuration-checklist.json`,
`u1-produce.yml`, `u1-lint.yml` or `u1-sandbox.mjs` changes. Verification set as planned
(per-driver runs, lint_embedded, `node --check`, `git diff --check`, mutation proofs,
actionlint).

Proceed with implementation. Deliver the completion claim in the required shape.
