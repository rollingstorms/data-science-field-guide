---
id: prob.covariance
title: Covariance
tags: [statistics, dependence]
related: [prob.variance, prob.correlation]
prereqs: [prob.expectation, prob.variance]
---

# Covariance

<div class="formula" markdown="1">
## Formula
\[
\operatorname{Cov}(X,Y) = \mathbb{E}[(X-\mu_X)(Y-\mu_Y)] = \mathbb{E}[XY] - \mu_X\mu_Y
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\mu_X=\mathbb{E}[X]\), \(\mu_Y=\mathbb{E}[Y]\)

</div>
## What it means
Measures linear co-variation between two random variables.



## What it's used for
- Measuring joint variability.
- Building covariance matrices for multivariate models.
## Key properties
- \(\operatorname{Cov}(X,X)=\operatorname{Var}(X)\)
- If \(X\) and \(Y\) are independent, \(\operatorname{Cov}(X,Y)=0\)

## Common gotchas
- Zero covariance does not imply independence (unless jointly Gaussian).
- Units are the product of the units of \(X\) and \(Y\).



## Example
If \(X\) and \(Y\) are independent, then \(\operatorname{Cov}(X,Y)=0\).
## See also
- [Correlation](../probability-stats/correlation.md)
