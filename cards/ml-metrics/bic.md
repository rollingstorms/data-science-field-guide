---
id: ml.bic
title: Bayesian Information Criterion (BIC)
tags: [model-selection, evaluation, statistics]
related: [ml.aic]
prereqs: []
---

# Bayesian Information Criterion (BIC)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{BIC} = k\log n - 2\log \hat{L}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(k\): number of fitted parameters
- \(n\): number of observations
- \(\hat{L}\): maximized likelihood of the model

</div>
## What it means
Model-selection criterion that trades off likelihood fit with a stronger complexity penalty than AIC as sample size grows.

## What it's used for
- Selecting parsimonious probabilistic models on the same dataset.
- Common for Gaussian mixture model component selection.

## Key properties
- Lower is better
- Penalizes complexity by \(k\log n\), which grows with sample size
- Often favors simpler models than AIC

## Common gotchas
- Like AIC, only compare models fit to the same data and likelihood setup.
- Can underfit when predictive performance is the main goal.

## Example
If \(k=5\), \(n=100\), and \(\log \hat{L}=-120\), then
\(\mathrm{BIC}=5\log(100)-2(-120)\approx 263.0\).

## See also
- [Akaike Information Criterion (AIC)](../ml-metrics/aic.md)
