---
id: stat.map
title: Maximum A Posteriori (MAP)
tags: [statistics, inference, bayesian]
related: [stat.mle, prob.bayes-rule]
prereqs: [stat.mle, prob.bayes-rule]
---

# Maximum A Posteriori (MAP)

<div class="formula" markdown="1">
## Formula
\[
\hat{\theta}_{\text{MAP}}=\arg\max_\theta p(\theta\mid x)
=\arg\max_\theta p(x\mid \theta)p(\theta)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\theta\): parameters
- \(x\): observed data
- \(p(\theta)\): prior
- \(p(\theta\mid x)\): posterior

</div>
## What it means
MAP estimation chooses the most probable parameter value after combining data likelihood with a prior.

## What it's used for
- Bayesian-inspired parameter estimation.
- Regularized optimization (many regularizers correspond to priors).

## Key properties
- Reduces to MLE with a flat/constant prior.
- Prior influences estimates, especially with limited data.

## Common gotchas
- MAP is a point estimate, not the full posterior.
- Prior choice can dominate when data are scarce.

## Example
Gaussian prior on weights plus Gaussian noise yields a ridge-like objective (L2 regularization).

## See also
- [Maximum Likelihood Estimation (MLE)](../probability-stats/maximum-likelihood-estimation.md)
- [Bayes' Rule](../probability-stats/bayes-rule.md)
