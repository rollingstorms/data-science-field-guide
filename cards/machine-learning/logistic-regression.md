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

## How to Compute (Pseudocode)
```text
Input: training data X, labels y, learning settings
Output: parameters w, b and predicted probabilities

initialize w, b
repeat until convergence (or max iterations):
  p <- sigmoid(X w + b)
  compute gradient of log-loss with respect to w, b
  update w, b using an optimizer (for example, gradient descent or LBFGS/Newton-style method)

return w, b
```

## Complexity
- Time: Depends on the optimizer; many iterative methods cost roughly \(O(Tnd)\) for \(T\) passes/iterations with dense gradients, plus optimizer-specific overhead
- Space: Typically \(O(nd)\) for dense data plus \(O(d)\) model/gradient state (more for second-order/quasi-Newton methods)
- Assumptions: \(n\) samples, \(d\) features, binary logistic regression; convergence rate and constants depend on regularization, conditioning, and optimizer choice

## See also
- [Log Loss](../ml-metrics/log-loss.md)
- [Threshold Selection](../machine-learning/threshold-selection.md)
