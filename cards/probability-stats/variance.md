---
id: prob.variance
title: Variance
tags: [probability, statistics, dispersion]
related: [prob.expectation, prob.standard-deviation, prob.covariance]
prereqs: [prob.expectation]
---

# Variance

<div class="formula" markdown="1">
## Formula
\[
\operatorname{Var}(X) = \mathbb{E}\big[(X-\mu)^2\big] = \mathbb{E}[X^2] - \mu^2
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\): random variable
- \(\mu = \mathbb{E}[X]\): mean

</div>
## What it means
Measures the average squared deviation from the mean.



## What it's used for
- Measuring spread around the mean.
- Risk and uncertainty quantification.
## Key properties
- \(\operatorname{Var}(X)\ge 0\)
- \(\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X)\)
- \(\operatorname{Var}(X)=0\) iff \(X\) is almost surely constant

## Common gotchas
- Variance depends on squared units of \(X\).
- \(\mathbb{E}[X]^2\neq\mathbb{E}[X^2]\); don't drop the square.



## Example
For \(X\in\{0,1\}\) fair coin,
\(\operatorname{Var}(X)=0.25\).
## See also
- [Expectation](../probability-stats/expectation.md)
