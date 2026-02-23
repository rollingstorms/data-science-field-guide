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

## See also
- [Null Hypothesis](../probability-stats/null-hypothesis.md)
- [Type I and Type II Errors](../probability-stats/type-i-type-ii-errors.md)
