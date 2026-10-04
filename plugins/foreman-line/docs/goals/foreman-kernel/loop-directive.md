# Foreman Kernel — Coordinator Loop Directive

## COORDINATOR OWNERSHIP — read before dispatching anything

> Exactly one coordinator owns this goal. Ownership transfers only at a parcel boundary, by
> editing the owner-of-record block below and recording a handoff. If another live owner is
> named or ownership is ambiguous, stop and report; never assume.

The blockquote above is the **ownership rule** and is governed canon: it states three
obligations and carries no identity, date, or status. Governed canon continues to the end of
this paragraph block and through the `Ratified authority` records below, all of which remain
**direct body of this heading**. Volatile owner-of-record and handoff state lives under the
`### Owner of record and handoff state` subheading that follows them, and is the declared extent
of region 2. This separation exists because
`rule.fk-loop-directive.7a05d374a3b1` previously bound the ownership rule and the
current owner's identity into one block, one locator, and one digest — so the rule went stale
every time the goal changed hands. Do not reunite them.

The ordering here is load-bearing and is not cosmetic. The five `Ratified authority` records are
published rules — including the pinned Standing Gate 2 grant referenced from `src/validate.ts` —
and they are kept out of region 2 **by remaining direct body of this `##` heading**, never by
being moved beneath a sibling `###`. Moving them under any subheading changes their anchor from
`…:list-item:1..5` to a subheading path, which re-anchors five published rules and forces an
identity migration. Do not introduce a subheading above them.

**Goal worktree:**
`D:/Repos/agent-skills-worktrees/foreman-kernel-stage0-20260830`

**Goal branch:** `codex/foreman-kernel-stage0-20260830`

**Ratified authority:**

- Original Gate 1 charter commit: `c4bf00f6fde9058e1350898914e06f261ae38c93`
- Plan-review triage commit: `a9a48b5656c3ce3837781c962a6ee00035d7f3c6`
- Scoped Gate 1 re-ratification commit:
  `26fb2b56e4861b6122a95f1d413394c0dcd3b4a1`
- Standing Gate 2: active for FK-P0 through FK-P21 under the charter contingencies
- Gate 3: delegated merge git step for fully-green chains only (RS-2.1, L7 — the
  `COORDINATOR-PATTERN.md` "merge it" rule); main/PR merges, repository-settings changes,
  deployment, and destructive cleanup remain human acts

### Owner of record and handoff state

Everything under this subheading is volatile operational state and is the declared extent of
region 2. The ownership rule and the `Ratified authority` records are above it as direct body of
the parent heading, outside this subtree.

**Owner of record.** omp coordinator session (successor), claimed 2026-09-27 under explicit owner direction ("foreman-kernel is the goal of interest"; "take ownership, and proceed to goal completion"), succeeding the RS-1 issuing session named in `fk-rescope-RS1-2026-09-27.md` (RS-1.5).

**Current coordinator worktree:** `D:/Repos/agent-skills-worktrees/foreman-kernel-coordinator-20261004`; coordinator state writes/commits are restricted to `plugins/foreman-line/docs/goals/foreman-kernel/`. The ambient `D:/Repos/agent-skills` checkout remains prohibited. Parcel implementation runs only in its named worktree.
**Current coordinator branch:** `codex/foreman-kernel-coordinator-20261004`, based on observed `dev` commit `733cd23dd163e517e4fe666554117d5cb1324fe1`; standalone A-U1.8.40 commit `258613a`.
**Goal integration branch:** `reconcile/refresh-actions` @ `609c97f663a1b124107342ee7245fc6177244fb9` (integration branch carrying the delegated FK-P0 Gate-3 merges).
**Published handoff boundary:** `fe31042bbe4370cb81b38632720849983c7be04c`.

**Resume record — 2026-10-03.** Resumed by the omp coordinator session of record (same owner line; developer-invoked `/goal resume foreman-kernel`). Boundary verified from git: `dev` @ `daf910c`, no builder or reviewer in flight, no other live coordinator named. Loop stopped awaiting owner action — see `fk-loop-stop-report-2026-10-03.md`. Ownership unchanged.
**Handoff record — 2026-10-04.** The owner invoked `/goal resume foreman-kernel`; ownership remains with this omp coordinator session. The recorded stage0 worktree/branch were absent. Under the owner's direction, this coordinator uses the replacement isolated worktree/branch above. A-U1.8.40 was committed alone as `258613a` before any dependent parcel action. A fresh read-only recovery Step 0 found parcel branch `codex/u1-closure-round3` @ `fe659df` with no completion claim; all parcel state remains unclaimed. See `fk-loop-resume-record-2026-10-04.md` for branch inventory, historical failed checks, and the current coordinator-worktree checkout residue; only exact goal-record paths are staged.

**Handoff record — 2026-09-27.** The owner directed a successor coordinator to determine where the prior session left off, take ownership, and proceed to goal completion. Verified boundary state before claim, from git and disk rather than memory: FK-P0 Gate-3 merges are complete on `reconcile/refresh-actions` — `a986b45` (R31 registry, package byte-identical to accepted `1747c1d`, verified by empty `git diff 1747c1d HEAD -- plugins/foreman-line/authority-registry`) and `609c97f` (preparation packet), both under RS-1.5's delegated merge step; amendment RS-1 is in force (ledger L6); no builder or reviewer was in flight (FK-P1+ undispatched per `fk-p1-p21-dispatch-plan.md`, FK-P1 Stage-A shaped with F05 open); the §15.2 fresh plan review recorded as "dispatched" had no result on disk and was re-dispatched by this owner as five independent review lenses, recorded in `plan-review-findings.md`. Ownership transfers to this session at this parcel boundary. The 2026-09-26/27 record wave (reconciliation, dispatch plan, marginal-value quantification, RS-1, charter status edits) was uncommitted at claim time and is committed by this owner to the integration branch.

**Handoff record — 2026-09-07.** The developer directed this session to move forward during a six-hour absence. The clean goal/implementation/handoff source worktrees were preserved, and no matching source-worktree process was observed. That observation is not a declaration that an older session was proven dead. New work is on isolated coordinator and recovery branches. The recorded September 4 ownership provenance remains in the published handoff's exact source copies.

**Disambiguation for a future reader:** two coordinator sessions held this goal on 2026-09-03.
The first reproduced the inherited green chain and wrote `FK-P0-MERGE-READY-material.md`; the
second executed Option B, found the blocker in `FK-P0-BLOCKER-volatile-canon-source.md`, and
ratified R24 and its correction R25. Where a record says "this owner" without a date, read the
file's own commit date.

**Handoff record — 2026-09-03.** The prior owner (the Claude Code coordinator session of
2026-09-01 → 2026-09-02) stopped after writing `FK-P0-GATE-3-package.md`, leaving FK-P0 at
Gate 3 and the working tree clean. Transfer occurred at a clean parcel boundary, verified
rather than assumed: no dispatch in flight, no open PRs, and **all 27 `fk-p0-*` /
`foreman-kernel-*` worktrees confirmed clean** by a scripted `git status --porcelain` sweep.
No builder or reviewer work was uncommitted. Unlike the 2026-09-01 transfer, no inherited
claim is being discarded — see the independent verification below, which reproduced the
prior owner's evidence rather than taking it on trust.

**Handoff record — 2026-09-01.** The prior owner (the primary Codex coordinator
session, 2026-08-30 → 2026-09-01) stopped without a handoff, last writing to this
worktree at 11:10 EDT on 2026-09-01 and leaving `charter.md` modified and eleven
untracked artifacts uncommitted. The developer was asked directly whether that session
was live and ruled it **dead**, transferring ownership to this session with the
instruction to take the lead. Transfer occurred at a parcel boundary: FK-P0 was built
and reworked but never merged, and no dispatch was in flight (no open PRs; every review
worktree clean).

**Inherited-state caveat — read before trusting any FK-P0 claim.** The prior owner
recorded FK-P0 rework rounds R2–R13 in commit messages, but **no review findings for
any of those rounds exist on disk** in this repository, on the parcel branch, or in the
twenty-six `fk-p0-*` review worktrees (all verified clean). Those findings existed only
in the dead session's transcript and are unrecoverable. Under the standing rule that
wrong-shaped claims are presumptively empty, **no R2–R13 review is treated as having
occurred.** FK-P0 re-enters adversarial review from zero under this owner.

_(The goal-identity and ratified-authority records were moved above the owner-of-record
subheading, back to direct body of `## COORDINATOR OWNERSHIP`, so the five published rules keep
their `list-item:1..5` anchors. See the ordering note there.)_

## Current state — update at every stop or parcel closure

**STATE 2026-10-04 (live) — U1 §8 ROUND-3 PHASE A RECOVERY BUILDER RESUMED; NO CODE CLAIM YET.** Step 0 is accepted by `U1-round3-step0-ruling-2026-10-04.md` (`cc6ef86`, with A34/timeout ruling `96b3e89`). The recovery builder’s pre-fix `py -3 run_all.py` attempt timed out after 3600 seconds without an exit code; it made no source changes. This is an incomplete/red baseline, not a pass; do not rerun merely to confirm. Coordinator directed the builder to treat A-U1.8.34 as Phase-B owner-gated, continue Phase A without editing the contract, verify pinned `ed848ba` citations before affected edits, and run final checks once after all changes. No completion claim or new source commit has been delivered. Parcel branch `codex/u1-closure-round3` @ `fe659df127157484c1392d4a08a3118c369f0579` remains unclaimed, with modified `drive_a28.py`, `drive_a31.py`, and untracked `__pycache__/u1r3_extract.cpython-313.pyc`; do not stage cache. The 1123 registered cases are inventory only, not pass evidence. A40's exact request/oracle paths remain unaccepted until the builder claims them and the coordinator closes them. `u1-fixture` remains HELD; reviewer `openai/gpt-6-astra`; Phase B and external actions remain gated.
See `fk-loop-resume-record-2026-10-04.md` for the continuation evidence and next action.

**STATE 2026-09-27 (live) — SUCCESSOR COORDINATOR CLAIMED THE GOAL; FK-P0 CLOSED AT THE MERGE LEVEL; RS-1 PROGRAM IN FORCE.** FK-P0 Gate-3 merges are on `reconcile/refresh-actions`: `a986b45` (R31 registry — package byte-identical to accepted `1747c1d`) and `609c97f` (preparation packet), both performed under RS-1.5's delegated merge step. Amendment RS-1 (ledger L6) governs the program: in scope FK-P1–FK-P11 plus retargeted FK-P17′/FK-P18′; deferred FK-P12–FK-P16/P19/P21 to post-wave value checks; FK-P20 dropped; FK-P2 elevated immediately after FK-P1. The §15.2 plan review completed 2026-09-27 (five independent lenses, 43 findings, 17 BLOCKER — `plan-review-findings.md`); its four Gate-1 questions were disposed by the owner and recorded as amendment RS-2 (L7, `fk-rs2-gate1-reratification-2026-09-27.md`): scoped Gate-3 delegation ratified, INF obligations reassigned/stranded, RS-1.4 sole exit + annex, FK-P2 narrowed with the D10 wiring deferred to negotiated FK-P2B. FK-P1 is MERGED — `fed2298` (Gate-3 delegated under RS-2.1: fully-green chain; dual architecture/risk reviews closed incl. one owner-authorized bounded round 3 after the declared tripwire fired; Stage F complete per `fk-p1-stage-f-closure-2026-09-27.md`; spec in `docs/specs/done/`). FK-P2 is MERGED (Gate-3 delegated under RS-2.1 — 166/166; two rework rounds with closure proofs; Stage F per `fk-p2-stage-f-closure-2026-09-28.md`; spec in `docs/specs/done/`). FK-P0 corpus amendment R32 is ACCEPTED (independent review CLOSED; 752/752; sweep 647→0) — the RS-2.5 trust condition is satisfied in full form. FK-P9 is MERGED (149/149; both lenses CLOSED; `fk-p9-stage-f-closure-2026-09-28.md`). FK-P17′ is MERGED (Gate-3 delegated under RS-2.1 + post-merge closure fix `0d3bff0` — 72/72 clean-checkout reproducible; the program's [INFERENCE] row is RESOLVED CONFIRMED two-sided: mutations outside the dispatch CLI bypass all scope checks; `fk-p17-stage-f-closure-2026-09-28.md`). In-scope merges complete: FK-P1, FK-P2, FK-P9 (+ A1–A1d amendments), FK-P10, FK-P17′. FK-P10 is MERGED (Gate-3 delegated under RS-2.1 — 158/158 + 16/16 loaded soak; one watchdog-reap recovery + two owner-ruled tripwire bookkeeping events; `fk-p10-stage-f-closure-2026-09-28.md`). FK-P11 is MERGED (Gate-3 delegated under RS-2.1 — 206/206; dual reviews closed incl. the P0 sanitizer backslash/XSS-class fix and the F-7 exemption gates; one bounded final round for L1-5 precedence coverage; `fk-p11-stage-f-closure-2026-09-29.md`) — **the Wave-3a exit fragment (c) is closed**. Remaining in-scope: FK-P18′ (U1-gated; FK-P17′ evidence landed). FK-P3/FK-P2B remain window-gated (holding FK-P4–P8 transitively). Deferred FK-P12–P16/P19/P21 + dropped FK-P20 and every stranded obligation are named in the exit annex. Owner-of-record transferred to this session at this parcel boundary (handoff record above). This block supersedes the STATE 2026-09-07 block below, which is retained verbatim as history.

**STATE 2026-09-07 — R31 accepted and published at1747c1df7dfa4677d345390ac673c3d15c82b980 after751/751 complete chain and two fresh final APPROVE verdicts.** Package equals tested2fc3940; runtime521214e/source8d remain fixed. Parent fresh fetch verified159 implementation manifest entries. Isolated integration with main476b8df passed:153 reviewed upstream deltas,398 unchanged protected inputs, repository-aware validate/sweep and generation direct0, no byte changes or ref mutation. Exact hypothetical treea9df33c is locally retained/reproducible from published inputs. Failed28 and two harness failures remain preserved. HumanGate3/actualmerge and FK-P1 merged dependency remain open; no merge or StageF.

This progress supersedes older state labels below. Read `CURRENT-RESUME.md` and `LIVE-PUBLICATION-MANIFEST.json` for published branches, fullSHAs and hashes. A1.8/A1.9 and INF adoption are ratified and separately integrated through R30. FK-P1 StageA draft/review/advisory/ShapingResult are complete but P1 implementation remains pending its mergedP0 dependency. U1 draft and provider observations are published; named preP18 choices remain. This coordinator-only operational update is confined to declared volatile state; implementation source snapshot65c4714 and its worktree remain unchanged.

**STATE 2026-09-04 #2 (live) — ROUND 6 RECOVERY BUILD ACTIVE. The developer ruled the prior
coordinator and round-6 builder dead and transferred ownership to this Codex session. Replacement
builder Newton (`01a06c31-f56b-7d80-ab38-9508ee64fedc`) completed a read-only Step 0 against
`dd1b434`: 583 tests, 561 pass, 22 fail; the inherited R29.3 partial has one TypeScript duplicate-
key error and no controls (a)–(g). The coordinator ruled that `5f9cf65` is the deliberate live
source snapshot while `51857a3` remains the historical dispatch authority. Implementation may
resume from the two preserved uncommitted package files. FK-P0 remains mid-round, not at Gate 3.**

This block is itself the first real test of what round 6 built: it is a coordinator state update
written into a **declared volatile region**, and the sweep must absorb it with zero violations.
Before round 6 this edit produced 45 violations and broke three tests. The result is recorded in
`FK-P0-round6-STOP-REPORT.md` alongside the measurement.

**What is done and on the branch (HEAD `ab8b891` package content):** the two-pass masking
primitive with excision before block discovery and before ordinal assignment; the two-kind extent
union (`heading-subtree`, `table-column`); all three regions declared; the closed-schema change;
`VOLATILE_REGION_OVERLAP` and `VOLATILE_REGION_INVALID`; obligation 1's rule removal; and a
document-derived second half of the anti-laundering check that asks whether a published item's
*text* is among the excised bytes, which the coordinator did not specify and which catches what
anchors cannot. `sweep --repo-root` is **0 violations, down from 54**. **The defect round 6 exists
to fix is closed.**

**What is not done, and why this is not a claim:** standing authorization 8 is unpublished, so the
count is 468 where R28 requires 469 — the acceptance assertion's one addition is unmet;
**none of controls (a)–(g) exist**; R29.3's anchor-keying is ratified but unimplemented; the
migration record and new chain head are unwritten; `generate` idempotence is unproven; and
`npm test` is **unmeasured for this round** — the 583/580/3 figures predate five governed-source
commits and must not be quoted.

**Three coordinator errors this round, recorded because they are the transferable part:** two
writers were put on one parcel after the coordinator wrongly judged the builder dead; a stale
`tsc` measurement was pinned to the wrong SHA; and three amendments' worth of rulings were issued
by message and never written into the spec, so two agents read canon and were correctly misled
(R29).

**Gate 3 remains not delegated. Not pushed, not merged, Stage F not run.**

**SUPERSEDED — STATE 2026-09-03 #1 — FK-P0 REMAINS AT GATE 3. The inherited green chain was
independently reproduced by this owner and it HOLDS. Stopped at the human gate, which is where the
loop is supposed to stop.**

This owner re-verified the prior owner's Gate 3 evidence on disk rather than accepting it, because
the 2026-09-01 handoff established that transcript-only claims are unrecoverable. Everything below
was produced by this owner's own commands:

| gate | inherited claim | this owner's result |
|---|---|---|
| parcel head | `838f438` | confirmed |
| code byte-identity `87f8a8c` → `838f438` | identical | confirmed — only `README.md` differs |
| `npx tsc --noEmit` | clean | exit 0 |
| `npx biome check .` | clean | exit 0 (5 infos) |
| `validate` (hermetic) | 18 sources / 1525 items / 469 rules, `unresolvedActiveConflicts: 0` | figures match exactly |
| `sweep --repo-root` | valid, 0 violations | exit 0 |
| `npm test` | 583 pass / 0 fail | **583 pass / 0 fail, exit 0, zero `not ok`** |
| merge into `main` | — | conflict-free, 54 files, **additions-only** |

**AC13 is independently corroborated.** The 583 figure reconciles exactly: the five short files
total 143 (1 + 113 + 1 + 5 + 23) and `semantic-invariants.test.ts` contributes 440.

**GAP CLOSED — `npm run generate` has now been run end to end, for the first time by anyone.** This
was Reviewer B's largest named unchecked item and the Gate 3 package carried it as an open gap. From
a clean worktree the generator exits 0, self-reports `{"items":1525,"rules":469,"sources":18}`
matching `validate` independently, and leaves `git status --porcelain` **empty** — all three of its
committed outputs (`schemas/`, `authority-enforcement-registry.yaml`,
`tests/fixtures/pass-minimal.yaml`) reproduce byte-for-byte. This proves the shipped registry is the
generator's own deterministic output rather than a hand-edited artifact that merely validates. It
does **not** prove the content is correct — a generator and a registry wrong in the same way agree
perfectly — and it does **not** close the in-place re-anchor residual, since byte-identical
regeneration is exactly the legitimate operation the hermetic validator cannot distinguish from a
re-anchor. `FK-P0-GATE-3-package.md` carries the full statement in both directions.

**NEW FINDING — the `semantic-invariants` failure mode is identified, and it was never a hang.**
The prior owner recorded five runs that "died identically with `semantic-invariants.test.ts` as a
single failing test, `pass 0`, no per-test output, after 23-38 minutes" and left the cause open;
round 3 later re-attributed it to a test that FAILS rather than one that is slow. **Both readings
are wrong.** This owner's first full run reproduced the signature and captured what no prior run
recorded — the child process exit code:

```
not ok 1 - tests\semantic-invariants.test.ts
  failureType: 'testCodeFailure'
  exitCode: 3221226505        # 0xC0000409 — Windows __fastfail / STATUS_STACK_BUFFER_OVERRUN
  duration_ms: 362379
```

`0xC0000409` is a hard process abort, not an assertion failure and not a timeout. That explains
every part of the signature at once: `pass 0`, no per-test output, and death partway through. The
string `3221226505` appears nowhere in this goal's records before today.

**It does not reproduce.** Same commit, same machine: the file passes **440/440 in 11m12s** run
alone, and the very next full run passed **583/583** end to end, surviving well past the 362s point
where run 1 aborted. Disposition: **a real but non-deterministic crash mode in the test harness,
recorded rather than latent — not an FK-P0 code defect, and not a blocker for Gate 3.** A future
owner who sees `pass 0` on this file should read the exit code before theorising; if it is
`3221226505`, re-run before diagnosing.

A hypothesis this owner formed and then killed by measurement, recorded so it is not re-formed: 31
leaked `./mcp/server.mjs` daemons are alive on the host, one per session accruing since 2026-08-29,
matching the "five-day daemon leak" of `d65fa5a`. They are **not** the cause — they hold 57 MB
working set / 773 MB commit against 18.8 GB commit free. Real hygiene debt, wrong suspect. Nothing
was killed; some PIDs may belong to live sessions and that is the developer's call.

**Gate 3 remains not delegated. No merge, no push, no Stage F.** Two facts the Gate 3 package does
not state, both found by this owner and both the developer's decision:

1. **`main` has moved ahead** — PR #14 (`goal-intake-hierarchical-worker-fabric`) landed after the
   parcel branch was cut, so the merge is no longer a fast-forward. It is still conflict-free.
2. **Merging the parcel branch alone leaves the Gate 3 paper trail off `main`.**
   `FK-P0-GATE-3-package.md` exists only on the goal branch; the parcel branch carries
   `loop-directive.md` and `charter.md` frozen at the `a703941` merge, 28 goal commits behind.
   Amendments R14-R23 do land correctly. **This owner deliberately did not fast-forward the parcel
   branch to fix this** — changing the head under an already-presented Gate 3 package is exactly the
   silent drift this parcel exists to detect.

**Ambient checkout — the user-owned change has GROWN; still never touch or absorb it.** As of
2026-09-03 `D:/Repos/agent-skills` carries user-owned edits to **two** files, not one:
`routing-policy/routing-policy.yaml` and now `routing-policy/src/validator.ts`. The developer
rewrote `KNOWN_FRONTIER_MODELS` from `['claude-opus-4-8']` to `['claude-fable-5.1',
'claude-opus-5', 'muse-spark-1.3', 'gpt-5.6-sol']`. This is the code change that Gate 3 package
item 7 predicted would be needed, and it is the developer's to make — invariant (e) is deliberately
anchored in reviewed code precisely so a policy edit alone cannot redefine `frontier`.

Consequences reported to the developer, none acted on by this owner: `src/testing.ts:58` and four
`tests/fixtures/reject-*.yaml` still pin the now-unknown `claude-opus-4-8`, so the valid-policy
builder now constructs an invalid policy and the reject fixtures may trip the frontier anchor
instead of the invariant each is meant to exercise — tests going red for the wrong reason. Also
noted: `model_tiers.frontier` is still `[claude-opus-5]` alone, so `claude-fable-5.1` is registered
but unroutable; nothing ties `model_tiers` members to `data_classification.eligible_models`; and
nothing checks that a model id resolves to a real model. **This is outside FK-P0's Allowed Files and
outside this goal. It is recorded here only so a future owner does not mistake it for parcel drift.**

**STATE 2026-09-02 (superseded by the 2026-09-03 block above) — THE STOP CONDITION FIRED, AND THE
DEVELOPER LIFTED IT.** The two-rework tripwire fired after round 2; this owner stopped and wrote
`FK-P0-STOP-REPORT-for-developer.md`. **The developer read it and explicitly lifted the tripwire and
authorised further rounds.** Rounds 3 and 4 followed. This is recorded because the previous version of
this block said STOPPED while the goal was actively running — a stale-state record in the one artifact
a future `/goal resume` trusts first, written by the owner of a parcel whose purpose is making canon
represent reality.

- Parcel branch `codex/fk-p0-canon-authority-enforcement-registry` at **`838f438`**. Rounds 3, 4 and 5
  committed (`cc57658`, `87f8a8c`, `838f438`); amendments **R19–R23** each committed alone before
  dependent code (SPEC-CONVENTION §11). **Not pushed — the branch does not exist on `origin`. Not merged.**
- **FK-P0 is AT GATE 3.** Read `FK-P0-GATE-3-package.md`: green chain, exact merge target, the residual
  stated in both directions, FK-P1 obligations with stop conditions, and the decisions that are the
  developer's.
- **AC13 closed on this owner's authoritative pass** at `cc57658` — exit 0, 583 tests, 583 pass,
  0 fail, stderr empty. Registry YAML and `RECONCILIATION_RECORD_DIGESTS` byte-unchanged throughout.
- Both independent reviewers returned **CLOSED WITH NEW FINDING** twice. Every blocker they raised is
  closed, and each was reproduced closed by this owner's own probes rather than accepted.
- Spec remains in `docs/specs/active/`; **Stage F closure not run.**
- **Gate 3 remains not delegated and no merge has been performed.**

**Known-open at this state, recorded rather than latent:** successor presence (Reviewer B's S3) is an
FK-P1 obligation with a stop condition, and R23 states the structural reason it cannot close in-band —
a stateless validator comparing a document to itself cannot detect a deletion; the surviving O4-bound
residual has one of its two faces pinned by a test; `npm run generate` has never been invoked end to
end.

**A new owner must not treat FK-P0 as one narrow fix away.** R16, R19 and R22 were each this owner's
amendments and each needed correction; the head-exemption design has admitted a tampered registry under
two different owners' hardening. Re-enter at triage, not at build.


**State 2026-09-01 (this owner).** Stage Zero complete; original Gate 1 and scoped
re-ratification complete; plan-level adversarial review complete and triaged. Amendment
**A1 is ratified and committed** (`16d90e5`). Amendment **A1.8 is applied to the working
tree pending the developer's text review** (approach directed 2026-09-01; the text was
never read — see its own known-defect section). Amendment **A2 is PARKED by developer
ruling of 2026-09-01** after four drafts and five independent reviews all returning
REQUEST CHANGES; its subject is recorded as a known unowned risk per A2's own rejection
clause, not silently dropped.

**FK-P0 is in rework round 1 of a maximum 2**, on branch
`codex/fk-p0-canon-authority-enforcement-registry`, base `1cd25b1`.

Round-1 chain to date: coordinator closure check (diff exactly the 28 Allowed Files,
additions-only; `tsc` 0; `biome` 0) -> two independent fresh adversarial reviews, both completed,
satisfying AC15 -> Reviewer A **REWORK REQUIRED** (2 BLOCKER / 8 SHOULD-FIX / 6 INFO), Reviewer B
**SHIP WITH FOLLOW-UPS** (1 BLOCKER / 5 SHOULD-FIX / 7 INFO), later placed on hold by its own
correction -> coordinator triage: **REWORK REQUIRED**, 22 findings dispositioned -> coordinator-
ratified spec amendment **R14** committed alone (`df639f1`) -> goal branch merged onto the parcel
branch (`a703941`) to resolve the charter-binding precondition -> rework directive issued
(`1cd25b1`), builder dispatched and holding at Step 0.

**The reviewers converged on facts and split on severity.** Four defects were found independently
by both sessions. The coordinator ruled for Reviewer A on the pivotal one, on a ground neither
reviewer cited: the spec forbids the manifest pin **twice** (Constraints line 97, and AC3), which
makes it a spec-conformance failure rather than a design choice.

**Open and genuinely unresolved: does `npm test` pass?** One full run returned exit 0; four others,
including an unmutated pristine control, died identically with `semantic-invariants.test.ts` as a
single failing test, `pass 0`, no per-test output, after 23-38 minutes. Every failing run had other
heavy node processes live. The builder's first task after Step 0 is to settle this on an idle
machine. **133 is not the baseline** -- it counts only the five other files.

Gate 3 remains a human action, and now covers **one** merge rather than two, since the goal branch
was merged onto the parcel branch.

The ambient-checkout prohibition now lives as standing authorization 8 under
`## Standing authorizations and their limits`, where R27 relocated it. It is a rule, and it
does not belong in a volatile status section.

The relocated standing stop-condition override now lives under `## Stop conditions`, where R26
ruling 2 moved it. Nothing normative belongs in this section: it is coordinator status, declared
volatile, and a rule written here would be uninventoriable.

## Role and canon

The coordinator consumes verification; it never produces independent verification of
its own work. On every iteration read:

1. `plugins/foreman-line/docs/goals/foreman-kernel/charter.md`;
2. this directive;
3. the active parcel spec, kickstarter, handoff, and review findings;
4. `plugins/foreman-line/docs/COORDINATOR-PATTERN.md`;
5. `plugins/foreman-line/docs/SPEC-CONVENTION.md`; and
6. `plugins/foreman-line/docs/kickstarters/STANDING-CONSTRAINTS.md`.

The plan-review transcript is
`plugins/foreman-line/docs/goals/foreman-kernel/plan-review-findings.md`.

## Standing authorizations and their limits

1. **Gate 2 dispatch** is authorized for exactly FK-P0–FK-P21, in the ratified
   dependency order. A new parcel or changed dependency graph reopens Gate 1.
2. **Shaping and coordinator lint** may proceed when dependencies are satisfied.
3. **Local isolated worktrees, branches, commits, tests, and review artifacts** are
   authorized for the named parcel only. Every parcel gets exact Allowed Files.
4. **Step 0 rulings** stay with the coordinator unless a flag changes a locked decision,
   external-effect boundary, public contract, security boundary, or exact Allowed Files;
   those require a ratified amendment before code.
5. **No external-system effects:** no Jira, cloud, deployment, publication, external
   communication, Docker-socket, signing, billing, credential, or repository-settings
   mutation.
6. **Gate 3 — delegated merge git step (RS-2.1, L7; the `COORDINATOR-PATTERN.md` "merge it"
   rule).** Present the complete green chain and exact merge target in the record. The
   coordinator merges the git step into the goal's integration branch only when every
   verification step is green; any red step voids the delegation for that chain. Main/PR
   merges, repository-settings changes, deployment, and destructive cleanup remain human
   acts — stop and report for those. Delegation never manufactures a gate's satisfaction.
7. A push or PR may occur only when the active parcel contract and developer authority
   clearly cover it; otherwise prepare local PR material and stop before the external
   action.
8. **The ambient `D:/Repos/agent-skills` checkout carries user-owned changes. Never touch or
   absorb them.** No agent working this goal — coordinator, builder, reviewer, or shaping
   session — reads from or writes to the ambient checkout, and no user-owned change is
   absorbed into a parcel branch. Relocated here from `## Current state` by R27, because it is
   a prohibition and was sitting in a section declared volatile, curated `ruleIds: []` with a
   boilerplate rationale asserting it stated no rule. It states a rule.

## September 7 continuation authority

The developer instruction recorded verbatim in `authorization-20260907-unattended.md` authorizes this coordinator to make the decisions and perform the non-destructive actions needed to advance this existing goal. Covered decisions do not require repeated permission requests. Record contract or source changes before implementation and retain exact parcel write boundaries, substantive fail-closed guarantees, complete verification and independent review.

Publication of the named source, continuation and evidence branches is authorized. This is a scoped exception to older external-effect wording for Git publication only. It creates no authority for deployment, spending, credentials, repository-settings mutation or destructive cleanup. Human Gate3 remains the merge boundary; publication and passing tests do not manufacture its satisfaction.

Preparatory shaping of downstream parcels may proceed in isolated documents while their implementation dependencies remain pending. A draft does not satisfy a dependency, and implementation dispatch retains the charter's dependency order and exact Allowed Files.

Source preservation applies to all prior worktrees and the published handoff. The already-published September7 companion was captured under the developer's explicit publication request; this does not create a general exception to standing authorization8 for unrelated ambient work.


## Per-parcel algorithm

1. Verify the current queue item and all dependencies against Git, not memory.
2. Dispatch a fresh shaping session in docs-only mode. It drafts one spec with exact,
   non-glob Allowed Files, Forbidden, Out of Scope, contracts, tests, evidence, collision
   risks, and Step 0 requirements.
3. Coordinator-lint every factual claim on disk. Check the spec against the charter word
   for word where it restates a locked decision or exit criterion. A missing product
   decision stops the loop.
4. Gate 2 is already active only if the spec stays within the charter. Create the parcel's
   named isolated worktree and branch from a verified base; never use the ambient checkout.
5. Dispatch a fresh builder. Its first action is Step 0 restate-and-stop: scope, exact
   Allowed Files, branch/worktree, dependencies, contract, verification, and every
   out-of-scope item. No code before coordinator confirmation.
6. Verify the builder's committed SHA and completion claim on disk before accepting it.
   Wrong-shaped claims are empty. Never dispatch review against uncommitted work.
7. Run the parcel's deterministic pass on the coordinator environment. Capture complete
   command output before trusting exit codes. Node/package work runs sequentially on
   Windows to avoid dependency-install races.
8. Every Foreman Kernel parcel is architecture/risk or critical unless its ratified spec
   says otherwise. Architecture/risk receives **two independent fresh reviews**. Reviewers
   never fix or commit and are explicitly licensed for hostile-input and mutation probing.
9. Triage findings as fix / accept-as-documented / informational. Reproduce disputed
   blockers before ruling. Rework gets a new Step 0 gate and a test-count tripwire.
10. When green, prepare the verification-chain table and PR material. Stop at the human
    Gate 3 before merge.
11. After a human merge, perform Stage F: spec to `done/`, lessons with dispositions,
    evidence index, worktree/branch cleanup, and this state block update.

## Queue and dependency order

| Parcel | State | Depends on |
|---|---|---|
| FK-P0 — Canon authority and enforcement registry | **MERGED 2026-09-27: `a986b45` (R31 registry) + `609c97f` (preparation packet) on `reconcile/refresh-actions`, retroactively confirmed under RS-2.1; R31 chain 751/751 + two fresh APPROVE verdicts + isolated main476 integration preserved; failed attempts retained.** | none |
| FK-P1 — Lifecycle, admission, and decision contracts | **ACTIVE** — Stage A shaped; F05 field tables complete 2026-09-27 under independent field review; builder next | FK-P0 (merged) |
| FK-P2 — Spec-body compiler | **next after FK-P1 (RS-1.3)**; scope narrowed by RS-2.4: compiler + hostile fixtures only, spec-grammar pinned; D10 wiring = **FK-P2B**, needs windows | FK-P0 (merged), FK-P1 |
| FK-P3 — Pure dispatch decisions | queued behind RCM Window R + boundary-routing/scaffolder negotiation (RS-2.4) | FK-P1 |
| FK-P4 — Verifier facade | pending | FK-P1, FK-P2, FK-P3 |
| FK-P5 — Clean-room trust-core spike | pending | FK-P4 |
| FK-P6 — Read-only MCP server | pending | FK-P4, FK-P5 |
| FK-P7 — Stateless verifier image and launcher | pending | FK-P6 |
| FK-P8 — Stateless harness portability proof | pending | FK-P7 |
| FK-P9 — SQLite storage and migration ABI | pending (Wave 3a) | FK-P1 |
| FK-P10 — Lease and transition engine | pending (Wave 3a) | FK-P9 |
| FK-P11 — Legacy import and projection engine | pending (Wave 3a) | FK-P9, FK-P10 |
| FK-P12 — Authorization policy engine | **DEFERRED (RS-1.1)** — follow-on candidate; decision fragments named in the RS-2.3 exit annex | — |
| FK-P13 — Admission-protected control catalog | **DEFERRED (RS-1.1)** — follow-on candidate | — |
| FK-P14 — Stateful image composition and operator lifecycle | **DEFERRED (RS-1.1)** — follow-on candidate | — |
| FK-P15 — Stateful restart and admission proof | **DEFERRED (RS-1.1)** — follow-on candidate | — |
| FK-P16 — Claude lifecycle adapter, shadow mode | **DEFERRED (RS-1.2)** — follow-on candidate | — |
| FK-P17′ — Bypass and outage harness (RS-1.2 retarget: shipped surfaces) | pending (Wave 4); **A1/D21 measurement carrier (RS-2.2)** | shipped surfaces + FK-P2 compiled-scope output where available |
| FK-P18′ — CI scope and state-evidence backstops (RS-1.2 retarget) | pending (Wave 4); A1.3 coarse CI bounds only; holds on the §14 U1 contract (E7) | FK-P17′ |
| FK-P19 — High-confidence refusal enforcement | **DEFERRED (RS-1.2)** — follow-on candidate | — |
| FK-P20 — Second-host feasibility and host registration | **DROPPED (RS-1.2)** — no longer a parcel | — |
| FK-P21 — Exit evidence manifest and clean-room proof | **DEFERRED (RS-1.2)** — follow-on candidate; manifest/retention obligations in the RS-2.3 exit annex | — |

Parallelism is allowed only after contracts merge and only for parcels with no shared
serialization point. The coordinator owns sequencing for manifests, lockfiles, package
exports, Docker/launcher files, migrations, hook registration, and CI workflows exactly
as assigned in the charter.

## FK-P0 shaping mandate

FK-P0 produces the canonical authority/enforcement registry and reconciles operative
contradictions before any runtime contract freezes. Its spec must:

- inventory every standing builder, reviewer, coordinator, gate, stop, and authority rule;
- classify each rule as pre-action refusal, post-action detection, CI/static check,
  independent review/human judgment, narrative provenance, or unsupported;
- define precedence, stable rule identity, source locator/digest, applicability, severity,
  decision semantics, enforcement owner, retirement state, and corpus-sweep evidence;
- reconcile gate-count language, current spec-linter/profile behavior, and live-vs-stale
  canon without rewriting historical artifacts;
- mechanically prohibit human approval, independent-verifier evidence, merge authority,
  closure authority, and generic receipt minting from agent-callable control state;
- define golden registry fixtures and mutation controls for identity/location/value,
  stale-source, duplicate-rule, contradictory-authority, and missing-source cases; and
- remain contract/docs only: no hooks, MCP server, SQLite runtime, Docker, external calls,
  or edits to the user-owned routing policy change.

## Stop conditions

Stop and report if:

- ownership is ambiguous or another live coordinator is named;
- a locked decision, parcel graph, exit criterion, external-effect boundary, or human gate
  needs to change;
- a required file falls outside exact Allowed Files;
- a current goal/parcel owns a required serialization point and sequencing is unresolved;
- a proposed control trusts self-asserted identity or can manufacture human/independent
  authority;
- a read-only path can escape its admitted repository or reach the state volume;
- a security finding cannot close inside the parcel;
- the same tripwire/rework cap fires as defined by the parcel;
- a reviewer or builder modifies the ambient checkout or another worktree;
- a user-owned change collides with the parcel; or
- the queue is empty without every goal exit criterion evidenced.

### Standing stop-condition override — the FK-P0 / A2 spiral

Relocated here from `## Current state` by R26 ruling 2. It was misfiled: this is a standing stop
condition, not a status record, and while it sat inside the volatile state section R24's region 1
would have made it permanently uninventoriable. Its text is unchanged by the move.

The prior owner drove FK-P0 through twelve rework rounds and amendment A2 through four
drafts without landing either, overriding the charter's own “same tripwire fires” stop
condition each time. That condition is reinstated with teeth: **this owner takes FK-P0
through at most two rework rounds.** A third stops the loop and reports. Rework-round
count is measured from `df8155a` forward under this ownership; inherited rounds are not
carried, but neither are they credited.

## Wakeup and crash recovery

Completion notifications are the primary wake signal. Use long fallback waits only while a
builder or reviewer is running; never poll rapidly. After a host restart or missing result,
check whether the session is still running before interpreting disk state. Uncommitted work
without a completion claim is unclaimed. A recovery session must restate the original
directive, inventory disk state and test count, identify gaps/half-written files, and stop
for coordinator ruling before continuing.
