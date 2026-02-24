---
id: ml.log-loss
title: Log Loss (Binary Cross-Entropy)
tags: [ml, metrics, classification, likelihood]
related: [ml.negative-log-likelihood, info.cross-entropy]
prereqs: [prob.bernoulli, ml.sigmoid]
---

# Log Loss (Binary Cross-Entropy)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{LogLoss} = -\frac{1}{n}\sum_{i=1}^n \left[y_i\log(\hat p_i) + (1-y_i)\log(1-\hat p_i)\right]
\]

</div>
## Plot
```plot
fn: -log(x)
xmin: 0.001
xmax: 0.999
ymin: 0
ymax: 7
height: 280
title: Binary log loss for y=1 vs predicted p
```

<div class="parameters" markdown="1">
## Parameters
- \(y_i\in\{0,1\}\): true label
- \(\hat p_i = P(y_i=1)\): predicted probability for class 1

</div>
## What it means
Penalizes confident wrong predictions heavily; corresponds to Bernoulli negative log-likelihood.



## What it's used for
- Training and evaluating probabilistic classifiers.
- Penalizing confident wrong predictions.
## Key properties
- Proper scoring rule: minimized in expectation by predicting the true probability
- Unbounded above (if you predict 0 for a true 1 → \(-\log 0\))

## Common gotchas
- Clip probabilities: \(\hat p \leftarrow \mathrm{clip}(\hat p, \epsilon, 1-\epsilon)\)
- Don’t confuse with accuracy: log loss cares about calibration

## Example
For \(y=1\) and \(p=0.8\),
\(-\log p=-\log 0.8\).
