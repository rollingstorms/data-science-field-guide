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

## See also
- [PDF (Probability Density Function)](../probability-stats/pdf.md)
- [Beta Distribution](../probability-stats/beta-distribution.md)
