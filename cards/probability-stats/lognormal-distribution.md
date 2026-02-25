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
## Plot
```plot
fn: exp(-(log(x)^2)/2)/(x*sqrt(2*PI))
xmin: 0.05
xmax: 4
ymin: 0
ymax: 1.0
height: 280
title: Lognormal PDF (mu=0, sigma=1)
```

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

## How to Compute (Pseudocode)
```text
Input: distribution parameters and query values (for PMF/PDF/CDF or moments)
Output: distribution quantities

validate parameters
for each query value x (or count k):
  evaluate the PMF/PDF/CDF formula from the card
optionally compute moments/statistics from known closed forms or by summation/integration
return the requested values
```

## Complexity
- Time: Typically \(O(q)\) for \(q\) query values once parameters are known (assuming constant-time formula evaluation per query)
- Space: \(O(q)\) for output values (or \(O(1)\) for a single query)
- Assumptions: Parameter estimation/fitting cost is excluded; numerical special-function evaluation can affect constants for some families

## See also
- [Normal Distribution (Gaussian)](../probability-stats/normal-distribution.md)
- [Exponential Distribution](../probability-stats/exponential-distribution.md)
