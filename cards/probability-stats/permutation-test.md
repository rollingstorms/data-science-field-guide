---
id: stat.permutation-test
title: Permutation Test
tags: [statistics, hypothesis-testing, resampling]
related: [stat.p-value, stat.ab-testing]
prereqs: [stat.p-value]
---

# Permutation Test

<div class="formula" markdown="1">
## Formula
\[
p\text{-value} \approx \frac{1+\sum_{b=1}^{B}\mathbf{1}[T^{*(b)}\ge T_{obs}]}{B+1}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(T_{obs}\): observed test statistic
- \(T^{*(b)}\): statistic after label shuffling

</div>
## What it means
A permutation test builds a null distribution by shuffling labels/assignments under exchangeability.

## What it's used for
- Nonparametric hypothesis testing for mean differences, correlations, and model comparisons.
- A/B tests when parametric assumptions are questionable.
## Key properties
- Directly approximates the null for the chosen statistic.
- Interpretation still depends on valid exchangeability assumptions.

## Common gotchas
- Do not permute when structure (time, pairs, clusters) breaks exchangeability.
- Monte Carlo error decreases as permutations increase.

## Example
Shuffle treatment labels many times to test whether observed uplift exceeds chance.

## See also
- [P-Value](../probability-stats/p-value.md)
