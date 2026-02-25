---
id: ml.bias-variance-tradeoff
title: Bias-Variance Tradeoff
tags: [machine-learning, generalization, model-selection]
related: [ml.cross-validation, ml.regularization]
prereqs: [prob.expectation, prob.variance]
---

# Bias-Variance Tradeoff

<div class="formula" markdown="1">
## Formula
\[
\mathbb{E}\big[(\hat f(x)-f(x))^2\big] = \mathrm{Bias}[\hat f(x)]^2 + \mathrm{Var}[\hat f(x)] + \sigma^2
\]

</div>
## Plot
```plot
fns: 0.75*exp(-0.45*x)+0.08 | 0.03*(x^2)+0.05 | 0.75*exp(-0.45*x)+0.03*(x^2)+0.2
colors: #1f6feb | #ff6b2c | #111111
labels: Bias^2 | Variance | Total error
xmin: 0
xmax: 8
ymin: 0
ymax: 1.25
height: 300
title: Bias-variance tradeoff (illustrative)
```

<div class="parameters" markdown="1">
## Parameters
- \(\hat f(x)\): learned predictor
- \(f(x)\): true signal
- \(\sigma^2\): irreducible noise

</div>
## What it means
Prediction error can be decomposed into systematic error (bias), estimation variability (variance), and noise.

## What it's used for
- Reasoning about model complexity and regularization.
- Choosing simpler vs more flexible models.
## Key properties
- Increasing complexity often lowers bias but raises variance.
- Regularization usually increases bias and decreases variance.

## Common gotchas
- Treat the decomposition as a conceptual guide; exact assumptions matter.
- Training error alone cannot reveal the tradeoff.

## Example
A deep tree may fit training data perfectly (low bias) but vary a lot across resamples (high variance).

## How to Compute (Pseudocode)
```text
Input: model family and a resampling/evaluation procedure
Output: qualitative or empirical bias/variance assessment

fit models of varying complexity (or regularization strength)
evaluate training and validation/test error across resamples/folds
observe patterns:
  high bias -> both errors high
  high variance -> train error low, validation error much higher / unstable
choose a complexity/regularization level balancing the tradeoff
```

## Complexity
- Time: Dominated by repeated model fitting/evaluation across model settings and resamples (workflow-dependent)
- Space: Depends on stored models, predictions, and resampling results
- Assumptions: This is an empirical model-selection workflow rather than direct computation of the theoretical decomposition terms

## See also
- [Cross-Validation](../machine-learning/cross-validation.md)
- [Regularization (L1/L2)](../optimization/regularization.md)
