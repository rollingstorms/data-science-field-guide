---
id: prob.correlation
title: Correlation
tags: [statistics, dependence]
related: [prob.covariance, prob.variance]
prereqs: [prob.covariance, prob.variance]
---

# Correlation

<div class="formula" markdown="1">
## Formula
\[
\rho_{XY} = \frac{\operatorname{Cov}(X,Y)}{\sigma_X\,\sigma_Y}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\sigma_X=\sqrt{\operatorname{Var}(X)}\)
- \(\sigma_Y=\sqrt{\operatorname{Var}(Y)}\)

</div>
## What it means
Normalized measure of linear dependence.



## What it's used for
- Measuring linear association between variables.
- Feature screening and diagnostics.
## Key properties
- \(-1 \le \rho_{XY} \le 1\)
- Invariant to affine scaling of \(X\) or \(Y\)

## Common gotchas
- Correlation measures only linear relationships.
- Undefined if either variance is zero.



## Example
If \(Y=X\) and \(\operatorname{Var}(X)>0\), then \(
ho_{XY}=1\).
## See also
- [Covariance](../probability-stats/covariance.md)
