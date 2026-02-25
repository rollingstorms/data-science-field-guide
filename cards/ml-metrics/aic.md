---
id: ml.aic
title: Akaike Information Criterion (AIC)
tags: [model-selection, evaluation, statistics]
related: [ml.bic]
prereqs: []
---

# Akaike Information Criterion (AIC)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{AIC} = 2k - 2\log \hat{L}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(k\): number of fitted parameters
- \(\hat{L}\): maximized likelihood of the model

</div>
## What it means
Estimates out-of-sample predictive quality by balancing fit (likelihood) against model complexity.

## What it's used for
- Comparing probabilistic models fit to the same dataset.
- Selecting model order (e.g., number of mixture components, ARIMA terms).

## Key properties
- Lower is better
- Only meaningful for relative comparison across candidate models on the same data
- Penalizes complexity linearly in \(k\)

## Common gotchas
- Absolute AIC values are not interpretable by themselves.
- Do not compare AIC across different datasets or different likelihood definitions.
- Small-sample correction (AICc) is often preferred when \(n\) is not large relative to \(k\).

## Example
If \(k=5\) and \(\log \hat{L}=-120\), then
\(\mathrm{AIC}=2(5)-2(-120)=250\).

## How to Compute (Pseudocode)
```text
Input: fitted model log-likelihood logL, parameter count k, sample size n
Output: AIC

compute AIC from logL and the penalty term in the card formula
return the score
```

## Complexity
- Time: \(O(1)\) once log-likelihood and model metadata are available
- Space: \(O(1)\)
- Assumptions: The cost of fitting the model and evaluating the likelihood is excluded

## See also
- [Bayesian Information Criterion (BIC)](../ml-metrics/bic.md)
