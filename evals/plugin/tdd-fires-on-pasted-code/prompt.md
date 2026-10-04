---
description: A test request with the function pasted inline. The skill should fire (through the test command or directly) and the reply should write concrete tests, not prose about testing.
expected_outcome: test-driven-development is invoked and the reply contains runnable test code covering the function, including its edge case.
max_turns: 12
allowed_tools: [Read, Glob, Grep, Skill]
---

Add unit tests for this function, there are none yet.

```js
function topUp(balance, amount) {
  if (amount <= 0) return balance;
  const fee = amount > 1000 ? 5 : 2;
  return balance + amount - fee;
}
```
