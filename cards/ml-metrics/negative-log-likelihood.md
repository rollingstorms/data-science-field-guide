---
id: ml.negative-log-likelihood
title: Negative Log-Likelihood (NLL)
tags: [ml, likelihood, optimization]
related: [ml.log-loss, info.kl-divergence]
prereqs: [prob.likelihood]
---

# Negative Log-Likelihood (NLL)

## Formula
\[
\mathrm{NLL}(\theta) = -\sum_{i=1}^n \log p_\theta(x_i)
\]

## Parameters
- \(p_\theta(x)\): model density/mass
- \(x_1,\dots,x_n\): samples
- Often averaged: \(-\frac{1}{n}\sum_i \log p_\theta(x_i)\)

## What it means
Training by maximum likelihood is minimizing NLL.

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
