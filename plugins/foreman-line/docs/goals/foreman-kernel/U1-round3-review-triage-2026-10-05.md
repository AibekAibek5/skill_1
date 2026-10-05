# U1 §8 round 3 — review triage and coordinator conformance ruling — 2026-10-05

**Reviews:** Lens A `U1R3ReviewA` (contract conformance + claim/test quality) — **REQUEST CHANGES**;
Lens B `U1R3ReviewB` (hostile-input/trust-core) — **APPROVE** (96 hostile checks, 3 INFO).
Both independent, neither built any round-3 code; neither fixed or committed anything.

## Coordinator reproduction of disputed findings (before ruling)

| Finding | Coordinator re-run (reviewer's temp-copy probe, untouched worktree) | Result |
|---|---|---|
| A-F1 | `py -3 probe_gap_steal2.py` | **REPRODUCED**: `steal-matrix` → `status=ACCEPT codes=[]` (exact-triple gap relabel + fabricated replacement row launders a failing row to ACCEPT); baselines match the finding (`bad-matrix` → `INVALID/U1_CONTROL_FAILED`; `steal-matrix-noreplace` → `INCOMPLETE/U1_REQUIRED_EVIDENCE_MISSING`) |
| A-F2 | `py -3 probe_stray_row.py` | **REPRODUCED**: `stray-unknown-control` → `ACCEPT`, `stray-no-controlId` → `ACCEPT` (first attempt died on host flake `0xC0000135` STATUS_DLL_NOT_FOUND in the probe's `git` subprocess — re-run clean, per the recorded read-the-excode precedent) |

## Triage table

| ID | Severity (filed) | Disposition | Ruling |
|---|---|---|---|
| A-F1 | BLOCKER | **FIX (code + named cases + claim truth)** | See conformance ruling R-1 below. The named hostile input of A-U1.8.29 ("a fixture bundle that relabels a failing row as a gap is refused") is not refused in its exact-triple form; the §5 map's A-U1.8.29 "28/28 LOCAL-EXERCISED" overstates coverage (no registered case exercises a failing-row relabel). Both must close |
| A-F2 | SHOULD-FIX | **FIX (bundled with R-1)** | The controlId-rename laundering is the same defect class as the named hostile input (a failing row vanishing from the accounting); row closure refuses both transforms. Tolerating + disclosing would leave the named refusal bypassable by a trivial rename |
| A-F3 | INFO | **FIX in rework (docs)** | §5's A-U1.8.28 cl.4 byte citation carries a spurious trailing `\n`; behaviour fine (hostile runId present and refused) — make the evidence record byte-true |
| A-F4 | INFO | **FIX in rework (docs)** | §1 FL-2 wording ("FLOORs at the registered counts accepted") overstates: a29/a31/a36 FLOORs sit at baseline values. Not a weakening (FL-2 requires FLOOR ≥ 1123-baseline, satisfied); the wording must match the bytes |
| A-F5 / B-INFO-3 | INFO | **housekeeping** | `u1-round3-checks/__pycache__/` untracked; remove at post-smoke cleanup. Nuance for the record: the builder removed it at its cleanup; the coordinator's deterministic pass regenerated it afterwards — nobody is being accused here |
| B-INFO-1 | INFO | **accept-as-documented** | Value heredoc-marker (`v<<EOF`) passes the writer — ratified cl.2 requires only CR/LF/NUL refusal + key grammar (satisfied); downstream re-validation fails closed. No in-contract defect; carried to the exit-annex nit list as defense-in-depth |
| B-INFO-2 | INFO | **accept-as-documented** | `out.setdefault('executionProvenance', …)` could accept candidate-supplied provenance in a future feed (today's feeds carry none; verifier re-proves any entry). Carried to the A-U1.8.38 re-pin review as a producer-hardening question |

## Negative space (recorded, no findings)

Lens A's eight vacuity probes all passed — including VP1/VP2, which break `check_claims` and prove
the Phase-2 `0ede44c` needle change is **not** vacuous (the named cases fail against the broken
check). Clause-coverage sweep passed every A-U1.8.28…E-6 clause except the F1/F2 residual; record
integrity re-derived exactly (digests recompute, `u1r3_records.py` byte-idempotent, checklist diff
`a06eb35` reobservedBy-only, pin-staleness claim true); claim-honesty sweep found only the F1
overstatement. Lens B: every named attack area withstood 96 checks.

## R-1 — coordinator conformance ruling (row closure)

A-U1.8.29's normative sentence — "a gap row is permitted **only when** its (id, caseId, obligation)
equals one entry exactly" — states a **necessary** condition, not a sufficient one. Its
"**Hostile input:** a fixture bundle that relabels a failing row as a gap is refused" states a
**required refusal**. The two are jointly satisfiable; the implementation satisfies only the first.

**Ruling: the named refusal is mandatory, and it covers the laundering class, both transforms.**
The invariant the builder implements: **row closure** —

1. every fixture-evidence row is bound to exactly one oracle-named case/row identity as recorded in
   the bundle; every oracle-named case is evidenced by exactly one qualifying row bearing that
   case's own identity;
2. a permitted-gap row may excuse **only its own named gap case's slot** — never stand in for,
   displace, or suppress any other case's row; an exact-triple match stays necessary but is not
   sufficient;
3. any failing-row→gap relabel, any controlId/identity-rename laundering, any duplicate identity,
   and any row outside the oracle's named set are refused `INVALID`/`U1_ARTIFACT_INVALID` (the
   clause's own mapping for non-permitted gap rows; align the exact code with the ratified error
   mapping and stop if that would change contract semantics);
4. legitimate bundles do not regress: every currently-passing registered case and fixture keeps
   passing (this is a refusal added, not a tolerance removed).

Scope note: this ruling construes ratified text as written and **strengthens** enforcement toward
the named refusal; it changes no contract text, no Allowed Files, no external boundary. If the
owner prefers the weaker reading (exact triples sufficient + disclose the residual), that is a
change to a ratified named refusal and would need owner ratification — the stop report carries
this ruling for that purpose.

## Rework authorization (round-3 rework 1 of at most 2; a third stops for owner ruling)

- **Work:** implement R-1 row closure in `u1-verify.yml` (within the ruling's Allowed Files);
  registered cases in `drive_a29.py`/`drive_a28.py` (builder's choice, amendment-bound) exercising
  (a) the exact-triple relabel + fabricated-replacement bundle → refused, (b) the controlId-rename
  laundering → refused, (c) stray rows → refused — each **failing-when-broken** and
  mutation-probed; F3/F4 doc fixes; §5 A-U1.8.29 coverage stated truthfully.
- **Step 0 gate:** rework gets its own Step-0 restate-and-stop; no code before coordinator
  confirmation (same two-phase discipline as the build).
- **Tripwires:** registered cases strictly ≥ the current 1128 (additions only); per-driver floors
  never weaken; every pre-existing case keeps its outcome; the completion claim is re-issued with
  exact counts.
- **Verification:** per-driver runs; final local verification **once** after the last code change
  (at most one full `py -3 run_all.py`; report exact outcomes without retrying); `lint_embedded`,
  `node --check u1-sandbox.mjs`, `git diff --check`.
- **Limits:** unchanged — no push/PR/tag/gh/az/live calls/provisioning/pin update/merge; no
  contract/consumer-rule text edits; `__pycache__` never committed; removal at post-smoke cleanup.
