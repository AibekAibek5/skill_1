# U1 §8 round 3 — rework 1 — owner ruling on A-F1 / R-1 closure shape — 2026-10-06

## Provenance of the question

The 2026-10-05 #2 omp coordinator session posed this question to the owner via `ask`
(tool call `toolu_01LsFAUvuYKk26eW8ZFMAn3s`, 2026-10-05 15:39 EDT) and died (sighup, host
memory exhaustion) at 15:51 EDT **with the ask unsent**. The question was recovered from
the session exit record's `pendingToolCalls` and re-posed by the successor pi coordinator
session on 2026-10-06. See `fk-loop-resume-record-2026-10-06.md` and lesson #51.

## The question as posed

U1 r3 rework 1, Step 0 found that R-1 row closure can't be fully enforced from bundle
bytes. The oracle names controls, invariants and the 3 gap triples, but not the
observation case IDs (FIX-INV-01..05). Two consequences: (1) The only byte-visible sign of
A-F1 is a permitted gap row that also binds an invariant or control. Refusing that shape
means changing the input of the 3 existing a29 positive cases (bound gap rows → unbound).
Their name and their ACCEPT outcome stay the same. It also adds a forward shape rule for
FK-P18′: gap rows carry no invariantIds/controlId. (2) Drop invariantIds from the relabeled
row and the same attack still reaches ACCEPT. That gives no more power than editing
FIX-INV-03's signals directly, which the ratified E-2 §9.2 limitation already accepts
(candidate-supplied signals). How should A-F1 close?

The four options offered: (1) shape rule + documented residual; (2) full closure via
oracle amendment (oracle schema, -r3 records, digests and the A-U1.8.38 re-pin all churn;
contract work first); (3) shape rule now, oracle amendment in Phase B; (4) weaker reading
(exact triples sufficient, A-F1 disclosed — narrows a ratified named refusal). The
session's recommended option was (3).

## Owner decision (2026-10-06)

**Option 3 — shape rule now, oracle amendment in Phase B.** Recorded verbatim from the
owner: "Q1: 3".

Consequences, binding on rework 1 and on every later reading of R-1:

1. **The shape rule is implemented now**, in Phase A, under rework 1: refuse bound gap rows
   (a permitted-gap row that also binds `invariantIds`/`controlId`), stray rows, unknown or
   renamed `controlId` rows, duplicate identities, hidden row keys, and any row outside the
   oracle's named set, as `INVALID`/`U1_ARTIFACT_INVALID` (R-1 cl.3's mapping; stop if the
   ratified mapping would change contract semantics).
2. **The three existing a29 positive-case inputs are re-based to the unbound shape**
   (bound gap rows → unbound). This input change is owner-authorized; case names and ACCEPT
   outcomes must be unchanged. This is the only authorized input change in this rework.
3. **The trace-less relabel form** (drop `invariantIds`, still reaches ACCEPT) is a named,
   documented residual, covered only by the ratified E-2 §9.2 limitation
   (candidate-supplied signals). The implementation notes must state exactly this.
4. **Full R-1 cl.1 closure** (oracle names the observation case IDs and each permitted
   gap's slot) is carried as a **Phase-B amendment candidate** alongside the A-U1.8.38
   re-pin, which will churn the same oracle records and digests. It is deferred, not
   dropped.
5. **Option 4 was not ratified.** R-1's named refusal stands as ruled 2026-10-05: the
   laundering class, both transforms, is refused. Nothing here narrows ratified text.
6. **No contract, oracle, or amendment text changes** in this rework. The ruling construes
   ratified text as written and strengthens enforcement toward the named refusal.

## Status of the rework-1 gate

The rework-1 builder's Step-0 finding is now fully dispositioned (A-F1 shape resolved by
this ruling; A-F2 bundled with R-1 per the triage; A-F3/A-F4 doc fixes per the triage).
The builder may proceed past Step 0 under its own Step-0 confirmation; tripwires,
verification discipline and limits are unchanged from
`U1-round3-review-triage-2026-10-05.md`'s rework-authorization block.
