---
id: prob.correlation
title: Correlation
tags: [statistics, dependence]
related: [prob.covariance, prob.variance]
prereqs: [prob.covariance, prob.variance]
---

# Correlation

## Formula
\[
\rho_{XY} = \frac{\operatorname{Cov}(X,Y)}{\sigma_X\,\sigma_Y}
\]

## Parameters
- \(\sigma_X=\sqrt{\operatorname{Var}(X)}\)
- \(\sigma_Y=\sqrt{\operatorname{Var}(Y)}\)

## What it means
Normalized measure of linear dependence.

## Key properties
- \(-1 \le \rho_{XY} \le 1\)
- Invariant to affine scaling of \(X\) or \(Y\)

## Common gotchas
- Correlation measures only linear relationships.
- Undefined if either variance is zero.

## See also
- [Covariance](../probability-stats/covariance.md)
