---
id: prob.geometric-distribution
title: Geometric Distribution
tags: [probability, statistics, distribution, discrete]
related: [prob.bernoulli-trial]
prereqs: [prob.pmf]
---

# Geometric Distribution

<div class="formula" markdown="1">
## Formula
\[
P(X=k)=(1-p)^{k-1}p,\quad k=1,2,\dots
\]

</div>
## Plot
```plot
type: bars
xs: 1 | 2 | 3 | 4 | 5 | 6
ys: 0.3 | 0.21 | 0.147 | 0.1029 | 0.07203 | 0.050421
xmin: 0.5
xmax: 6.5
ymin: 0
ymax: 0.34
height: 280
title: Geometric PMF example (p=0.3)
```

<div class="parameters" markdown="1">
## Parameters
- \(p\): success probability per trial
- \(X\): trial index of first success

</div>
## What it means
Models how many Bernoulli trials are needed to get the first success.

## What it's used for
- Waiting-time models in discrete time.
- Reliability and queueing toy models.

## Key properties
- Memoryless: \(P(X>m+n\mid X>m)=P(X>n)\).
- Mean \(1/p\).

## Common gotchas
- Some texts define support starting at 0 (failures before first success) instead of 1.
- Must state parameterization explicitly.

## Example
If \(p=0.2\), the probability the first success occurs on trial 3 is \(0.8^2\cdot 0.2\).

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
- [Exponential Distribution](../probability-stats/exponential-distribution.md)
