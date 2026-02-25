---
id: prob.exponential-distribution
title: Exponential Distribution
tags: [probability, statistics, distribution, continuous]
related: [prob.poisson-distribution, prob.gamma-distribution]
prereqs: [prob.pdf, prob.cdf]
---

# Exponential Distribution

<div class="formula" markdown="1">
## Formula
\[
f(x)=\lambda e^{-\lambda x},\quad x\ge 0
\]

\[
F(x)=1-e^{-\lambda x}
\]

</div>
## Plot
```plot
fn: exp(-x)
xmin: 0
xmax: 6
ymin: 0
ymax: 1.1
height: 280
title: Exponential PDF (lambda=1)
```

<div class="parameters" markdown="1">
## Parameters
- \(\lambda>0\): rate
- \(x\ge 0\): waiting time

</div>
## What it means
Models waiting times between events in a Poisson process.

## What it's used for
- Time-to-event modeling with constant hazard.
- Queueing and reliability basics.

## Key properties
- Memoryless continuous distribution.
- Mean \(1/\lambda\), variance \(1/\lambda^2\).

## Common gotchas
- Rate \(\lambda\) vs scale \(1/\lambda\) parameterizations are both used.
- Not appropriate when hazard changes over time.

## Example
If \(\lambda=2\) per hour, expected waiting time is \(0.5\) hours.

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
- [Poisson Distribution](../probability-stats/poisson-distribution.md)
- [Gamma Distribution](../probability-stats/gamma-distribution.md)
