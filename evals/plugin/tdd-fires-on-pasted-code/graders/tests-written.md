---
type: llm
---

PASS if the reply writes concrete, runnable test code for `topUp` (not prose describing what tests would look like), covering at least the fee boundary (amount > 1000 vs <= 1000) and the non-positive amount guard.

FAIL if the reply contains no test code, or only describes testing in prose.
---
