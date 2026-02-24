---
id: stat.bootstrap
title: Bootstrap
tags: [statistics, resampling, inference]
related: [stat.confidence-interval]
prereqs: [stat.confidence-interval]
---

# Bootstrap

<div class="formula" markdown="1">
## Formula
\[
\hat{\theta}^{*(b)} = s(X^{*(b)}),\quad X^{*(b)}\sim \text{resample with replacement from } X
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(s(\cdot)\): statistic
- \(b\): bootstrap replicate index

</div>
## What it means
The bootstrap estimates sampling variability by repeatedly resampling the observed data with replacement.

## What it's used for
- Confidence intervals, standard errors, and stability checks when analytic formulas are hard.
- Model performance uncertainty estimates.
## Key properties
- Nonparametric and broadly applicable.
- Works best when the sample represents the population and observations are appropriately independent.

## Common gotchas
- Resample the right unit (e.g., user/session/cluster) to match dependence structure.
- Naive bootstrap can fail for heavy dependence/time series.

## Example
Estimate a 95% CI for median revenue by bootstrapping users 10,000 times.

## See also
- [P-Value](../probability-stats/p-value.md)
