---
id: prob.uniform-distribution
title: Uniform Distribution
tags: [probability, statistics, distribution]
related: [prob.pdf, prob.cdf]
prereqs: [prob.probability-distribution]
---

# Uniform Distribution

<div class="formula" markdown="1">
## Formula
\[
X\sim \mathrm{Uniform}(a,b),\qquad
f(x)=\frac{1}{b-a}\ \text{ for } a\le x\le b
\]

</div>
## Plot
```plot
fn: 1
xmin: 0
xmax: 1
ymin: 0
ymax: 1.2
height: 280
title: Uniform PDF on [0, 1]
```

<div class="parameters" markdown="1">
## Parameters
- \(a<b\): interval endpoints
- \(x\): value in the interval

</div>
## What it means
All values in the interval \([a,b]\) are equally likely in density terms.

## What it's used for
- Baseline continuous distribution.
- Random initialization and simulation.

## Key properties
- Mean \((a+b)/2\), variance \((b-a)^2/12\).
- Constant density on the interval.

## Common gotchas
- Continuous uniform has \(P(X=x)=0\) for any exact point.
- "Equally likely values" for continuous variables refers to equal-length intervals.

## Example
\(\mathrm{Uniform}(0,1)\) is commonly used for random sampling in simulations.

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
- [PDF (Probability Density Function)](../probability-stats/pdf.md)
- [Beta Distribution](../probability-stats/beta-distribution.md)
