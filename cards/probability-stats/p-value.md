---
id: stat.p-value
title: P-Value
tags: [statistics, hypothesis-testing]
related: [stat.null-hypothesis, stat.type-i-type-ii-errors]
prereqs: [stat.null-hypothesis]
---

# P-Value

<div class="formula" markdown="1">
## Formula
\[
p = P(T \ge t_{\text{obs}}\mid H_0)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(T\): test statistic under the null distribution
- \(t_{\text{obs}}\): observed statistic value
- \(H_0\): null hypothesis

</div>
## What it means
The p-value is the probability, assuming the null hypothesis is true, of observing a test statistic at least as extreme as the observed one.

## What it's used for
- Hypothesis testing and significance reporting.
- Screening evidence against a null model.

## Key properties
- Smaller p-values indicate stronger incompatibility with \(H_0\).
- Depends on test definition and tail convention.

## Common gotchas
- Not the probability that \(H_0\) is true.
- Not a measure of effect size or practical importance.

## Example
A p-value of 0.01 means results this extreme would occur about 1% of the time under \(H_0\).

## How to Compute (Pseudocode)
```text
Input: observed test statistic t_obs, null distribution (exact/approximate/permutation)
Output: p-value

compute tail probability under H0 at least as extreme as t_obs
  (tail definition depends on one-sided vs two-sided test)
return that probability
```

## Complexity
- Time: Depends on how the null distribution is obtained (closed-form CDF lookup, numerical integration, or resampling/permutation)
- Space: Depends on whether null samples/statistics are stored or streamed
- Assumptions: Test statistic and tail convention are fixed before interpretation; null-distribution estimation method determines practical cost

## See also
- [Null Hypothesis](../probability-stats/null-hypothesis.md)
- [Type I and Type II Errors](../probability-stats/type-i-type-ii-errors.md)
