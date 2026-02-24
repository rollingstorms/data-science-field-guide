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

## See also
- [Cross-Validation](../machine-learning/cross-validation.md)
- [Regularization (L1/L2)](../optimization/regularization.md)
