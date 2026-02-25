---
id: prob.binomial-distribution
title: Binomial Distribution
tags: [probability, statistics, distribution, discrete]
related: [prob.bernoulli-distribution, prob.poisson-distribution]
prereqs: [prob.bernoulli-distribution, prob.pmf]
---

# Binomial Distribution

<div class="formula" markdown="1">
## Formula
\[
X\sim \mathrm{Binomial}(n,p),\qquad
P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}
\]

</div>
## Plot
```plot
type: bars
xs: 0 | 1 | 2 | 3 | 4 | 5
ys: 0.03125 | 0.15625 | 0.3125 | 0.3125 | 0.15625 | 0.03125
xmin: -0.5
xmax: 5.5
ymin: 0
ymax: 0.36
height: 280
title: Binomial PMF example (n=5, p=0.5)
```

<div class="parameters" markdown="1">
## Parameters
- \(n\): number of trials
- \(p\): success probability per trial
- \(k\): number of successes

</div>
## What it means
Models the number of successes in \(n\) independent Bernoulli trials with the same success probability.

## What it's used for
- Count outcomes from repeated yes/no trials.
- Baseline model for proportions.

## Key properties
- Mean \(np\), variance \(np(1-p)\).
- Support \(k=0,1,\dots,n\).

## Common gotchas
- Requires independent trials with constant \(p\).
- Poisson is only an approximation in a specific rare-event regime.

## Example
Number of heads in 10 fair coin flips is \(\mathrm{Binomial}(10,0.5)\).

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
- [Bernoulli Distribution](../probability-stats/bernoulli-distribution.md)
- [Poisson Distribution](../probability-stats/poisson-distribution.md)
