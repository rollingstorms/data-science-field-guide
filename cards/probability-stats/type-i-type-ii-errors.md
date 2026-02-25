---
id: stat.type-i-type-ii-errors
title: Type I and Type II Errors
tags: [statistics, hypothesis-testing]
related: [stat.p-value, stat.statistical-power]
prereqs: [stat.null-hypothesis]
---

# Type I and Type II Errors

<div class="formula" markdown="1">
## Formula
\[
\alpha = P(\text{reject } H_0 \mid H_0 \text{ true}),\qquad
\beta = P(\text{fail to reject } H_0 \mid H_1 \text{ true})
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\alpha\): Type I error rate (false positive rate under \(H_0\))
- \(\beta\): Type II error rate (false negative rate under \(H_1\))

</div>
## What it means
Type I error is a false positive; Type II error is a false negative.

## What it's used for
- Designing and evaluating hypothesis tests.
- Understanding tradeoffs between sensitivity and false alarms.

## Key properties
- Power equals \(1-\beta\).
- For fixed sample size, lowering \(\alpha\) often increases \(\beta\) (tradeoff).

## Common gotchas
- Error rates depend on the test procedure and assumptions.
- Confusing \(\alpha\) with the p-value from one experiment.

## Example
In medical screening, a Type I error may wrongly flag a healthy patient, while Type II misses a true condition.

## How to Compute (Pseudocode)
```text
Input: hypothesis test procedure and null/alternative scenarios
Output: Type I/Type II error rates (alpha, beta) and power

specify the rejection rule of the test
compute alpha under the null model (false-positive probability)
compute beta under the alternative model (false-negative probability)
compute power <- 1 - beta
return alpha, beta, power
```

## Complexity
- Time: Depends on whether error rates are derived analytically or estimated by simulation; simulation cost scales with the number of simulated trials and test-evaluation cost
- Space: Depends on whether simulated outcomes are stored or streamed into summary counts
- Assumptions: Error rates are properties of a test procedure under specified data-generating models, not one-off experimental outcomes

## See also
- [P-Value](../probability-stats/p-value.md)
- [Statistical Power](../probability-stats/statistical-power.md)
