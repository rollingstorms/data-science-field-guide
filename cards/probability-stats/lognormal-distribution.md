---
id: prob.lognormal-distribution
title: Lognormal Distribution
tags: [probability, statistics, distribution, continuous]
related: [prob.normal-distribution]
prereqs: [prob.normal-distribution, prob.pdf]
---

# Lognormal Distribution

<div class="formula" markdown="1">
## Formula
\[
X \text{ is lognormal } \iff \log X \sim \mathcal{N}(\mu,\sigma^2)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X>0\): positive random variable
- \(\mu,\sigma^2\): mean/variance of \(\log X\)

</div>
## What it means
A variable is lognormal if its logarithm is normally distributed, yielding a positively skewed distribution.

## What it's used for
- Modeling positive quantities with multiplicative effects (sizes, incomes, latencies).
- Noise models in some scientific/engineering settings.

## Key properties
- Support is strictly positive.
- Typically right-skewed.

## Common gotchas
- \(\mu,\sigma\) refer to log-space, not the mean/std of \(X\).
- Arithmetic means can be dominated by the tail.

## Example
If \(\log X\sim \mathcal{N}(0,1)\), then \(X\) is lognormal and always positive.

## See also
- [Normal Distribution (Gaussian)](../probability-stats/normal-distribution.md)
- [Exponential Distribution](../probability-stats/exponential-distribution.md)
