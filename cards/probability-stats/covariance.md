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
## How to Compute (Pseudocode)
```text
Input: sample data (and any reference values needed by the statistic)
Output: statistic value

compute the summary quantities required by the formula (for example, mean, deviations, counts)
apply the statistic formula from the card
return the result
```

## Complexity
- Time: Typically \(O(n)\) for \(n\) samples for common one-pass or two-pass summary-statistic computations (sorting-based medians are \(O(n\log n)\) unless selection is used)
- Space: \(O(1)\) to \(O(n)\) depending on whether values must be stored/sorted
- Assumptions: Sample-statistic workflow shown; parameter-estimation and streaming/online algorithms can change constants and memory usage

## See also
- [Correlation](../probability-stats/correlation.md)
