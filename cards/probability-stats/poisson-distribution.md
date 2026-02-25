---
id: prob.poisson-distribution
title: Poisson Distribution
tags: [probability, statistics, distribution, discrete]
related: [prob.bernoulli-trial, prob.expectation, prob.variance]
prereqs: [prob.pmf]
---

# Poisson Distribution

<div class="formula" markdown="1">
## Formula
\[
X\sim \mathrm{Poisson}(\lambda),\qquad
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!},\quad k=0,1,2,\dots
\]

\[
\mathbb{E}[X]=\lambda,\qquad \operatorname{Var}(X)=\lambda
\]

</div>
## Plot
```plot
type: bars
xs: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
ys: 0.13534 | 0.27067 | 0.27067 | 0.18045 | 0.09022 | 0.03609 | 0.01203 | 0.00344
xmin: -0.5
xmax: 7.5
ymin: 0
ymax: 0.31
height: 280
title: Poisson PMF example (lambda=2)
```

<div class="parameters" markdown="1">
## Parameters
- \(\lambda>0\): average count/rate in a fixed interval
- \(k\): nonnegative integer count

</div>
## What it means
Models the number of events occurring in a fixed interval when events happen independently at an approximately constant rate.

## What it's used for
- Count data (arrivals, defects, clicks per interval).
- Rare-event approximations to binomial counts.

## Key properties
- Discrete distribution on nonnegative integers.
- Mean equals variance (\(\lambda\)).

## Common gotchas
- "Poison" is a common typo; the distribution is "Poisson."
- If variance is much larger than mean, a plain Poisson model may fit poorly (overdispersion).

## Example
If \(\lambda=2\), then \(P(X=0)=e^{-2}\approx 0.135\).

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
- [Bernoulli Trial](../probability-stats/bernoulli-trial.md)
- [PMF (Probability Mass Function)](../probability-stats/pmf.md)
