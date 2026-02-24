---
id: ml.logistic-regression
title: Logistic Regression
tags: [machine-learning, classification, supervised-learning]
related: [ml.log-loss, ml.auc-roc, ml.threshold-selection]
prereqs: [act.sigmoid, ml.confusion-matrix]
---

# Logistic Regression

<div class="formula" markdown="1">
## Formula
\[
P(y=1\mid x)=\sigma(w^Tx+b)=\frac{1}{1+e^{-(w^Tx+b)}}
\]

\[
\log\frac{p}{1-p}=w^Tx+b
\]

</div>
## Plot
```plot
fn: 1/(1+exp(-x))
xmin: -6
xmax: 6
ymin: -0.05
ymax: 1.05
height: 280
title: Logistic link / sigmoid over score z
```

<div class="parameters" markdown="1">
## Parameters
- \(x\): feature vector
- \(w,b\): model parameters
- \(p\): predicted probability of positive class

</div>
## What it means
Models the log-odds of a binary outcome as a linear function of features, then maps to a probability with a sigmoid.

## What it's used for
- Binary classification with calibrated-ish probabilities (often).
- Interpretable baseline for tabular problems.
- Threshold-based decisions.
## Key properties
- Decision boundary is linear in feature space.
- Optimized with log loss, not MSE.

## Common gotchas
- High accuracy can still hide poor calibration or threshold choice.
- Coefficients are in log-odds units, not direct probability changes.
- Needs feature engineering for nonlinear boundaries.

## Example
Predict churn probability and choose a threshold based on business cost, not just 0.5.

## See also
- [Log Loss](../ml-metrics/log-loss.md)
- [Threshold Selection](../machine-learning/threshold-selection.md)
