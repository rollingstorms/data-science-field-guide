---
id: ml.negative-log-likelihood
title: Negative Log-Likelihood (NLL)
tags: [ml, likelihood, optimization]
related: [ml.log-loss, info.kl-divergence]
prereqs: [prob.likelihood]
---

# Negative Log-Likelihood (NLL)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{NLL}(\theta) = -\sum_{i=1}^n \log p_\theta(x_i)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(p_\theta(x)\): model density/mass
- \(x_1,\dots,x_n\): samples
- Often averaged: \(-\frac{1}{n}\sum_i \log p_\theta(x_i)\)

</div>
## What it means
Training by maximum likelihood is minimizing NLL.



## What it's used for
- Training probabilistic models by maximizing likelihood.
- Model comparison with log-likelihood.
## Key properties
- **Bernoulli** (binary classification) → NLL equals binary log loss
- **Categorical** (multiclass) → NLL equals multiclass cross-entropy
- **Gaussian regression** with fixed \(\sigma\):
  \[
  -\log \mathcal{N}(y\mid \mu_\theta(x), \sigma^2)
  \propto \frac{(y-\mu_\theta(x))^2}{2\sigma^2}
  \]
  So MSE is a special case (up to constants/scaling).

## Common gotchas
- Make sure \(p_\theta\) is a valid normalized probability density/mass.
- For densities, values can exceed 1; \(\log p\) is still valid.

## Example
For a Bernoulli model with \(y=1\) and \(p=0.8\),
\(\mathrm{NLL}=-\log 0.8\).
