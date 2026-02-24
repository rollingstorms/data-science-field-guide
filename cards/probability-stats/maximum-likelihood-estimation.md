---
id: stat.mle
title: Maximum Likelihood Estimation (MLE)
tags: [statistics, inference, estimation]
related: [stat.map, ml.negative-log-likelihood]
prereqs: [prob.probability-distribution]
---

# Maximum Likelihood Estimation (MLE)

<div class="formula" markdown="1">
## Formula
\[
\hat{\theta}_{\text{MLE}}=\arg\max_\theta \prod_{i=1}^n p(x_i\mid \theta)
\]

\[
=\arg\max_\theta \sum_{i=1}^n \log p(x_i\mid \theta)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\theta\): model parameters
- \(x_1,\dots,x_n\): observed data
- \(p(x_i\mid \theta)\): likelihood contribution

</div>
## What it means
MLE chooses parameter values that make the observed data most likely under the model.

## What it's used for
- Parameter estimation in statistics and machine learning.
- Deriving many standard estimators and training losses.

## Key properties
- Log-likelihood is usually easier to optimize than likelihood.
- Often equivalent to minimizing NLL.

## Common gotchas
- Likelihood is a function of \(\theta\), not a probability over \(\theta\).
- MLE can overfit or be unstable with small data.

## Example
For Bernoulli data, the MLE of \(p\) is the sample mean.

## See also
- [Maximum A Posteriori (MAP)](../probability-stats/maximum-a-posteriori.md)
- [Negative Log-Likelihood (NLL)](../ml-metrics/negative-log-likelihood.md)
