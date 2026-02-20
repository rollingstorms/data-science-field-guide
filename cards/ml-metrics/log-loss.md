---
id: ml.log-loss
title: Log Loss (Binary Cross-Entropy)
tags: [ml, metrics, classification, likelihood]
related: [ml.negative-log-likelihood, info.cross-entropy]
prereqs: [prob.bernoulli, ml.sigmoid]
---

# Log Loss (Binary Cross-Entropy)

## Formula
\[
\mathrm{LogLoss} = -\frac{1}{n}\sum_{i=1}^n \left[y_i\log(\hat p_i) + (1-y_i)\log(1-\hat p_i)\right]
\]

## Parameters
- \(y_i\in\{0,1\}\): true label
- \(\hat p_i = P(y_i=1)\): predicted probability for class 1

## What it means
Penalizes confident wrong predictions heavily; corresponds to Bernoulli negative log-likelihood.

## Key properties
- Proper scoring rule: minimized in expectation by predicting the true probability
- Unbounded above (if you predict 0 for a true 1 → \(-\log 0\))

## Common gotchas
- Clip probabilities: \(\hat p \leftarrow \mathrm{clip}(\hat p, \epsilon, 1-\epsilon)\)
- Don’t confuse with accuracy: log loss cares about calibration
