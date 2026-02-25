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

## How to Compute (Pseudocode)
```text
Input: data and a parametric likelihood model p(x; theta)
Output: MLE estimate theta_hat

write the log-likelihood l(theta) from the observed data
optimize l(theta) over theta (closed form or numerical optimizer)
return the maximizing parameter estimate theta_hat
```

## Complexity
- Time: Depends on model likelihood evaluation cost and optimization method (closed-form solutions can be cheap; numerical optimization is iterative)
- Space: Depends on parameter dimension and optimizer state, plus data storage
- Assumptions: Parametric likelihood model specified; optimization tolerance and initialization affect practical runtime

## See also
- [Maximum A Posteriori (MAP)](../probability-stats/maximum-a-posteriori.md)
- [Negative Log-Likelihood (NLL)](../ml-metrics/negative-log-likelihood.md)
