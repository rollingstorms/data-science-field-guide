---
id: prob.cdf
title: CDF (Cumulative Distribution Function)
tags: [probability, statistics, distribution]
related: [prob.pmf, prob.pdf, prob.probability-distribution]
prereqs: [prob.random-variable]
---

# CDF (Cumulative Distribution Function)

<div class="formula" markdown="1">
## Formula
\[
F_X(x)=P(X\le x)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\): random variable
- \(F_X(x)\): cumulative probability up to value \(x\)

</div>
## What it means
The CDF gives the probability that a random variable is less than or equal to a threshold.

## What it's used for
- Computing interval probabilities from differences of CDF values.
- Describing distributions in one unified form (discrete or continuous).

## Key properties
- Nondecreasing and right-continuous.
- \(\lim_{x\to -\infty}F_X(x)=0\), \(\lim_{x\to \infty}F_X(x)=1\).
- For continuous \(X\), \(f_X(x)=F_X'(x)\) where differentiable.

## Common gotchas
- For discrete variables, the CDF has jumps.
- The distinction between \(<\) and \(\le\) matters for discrete distributions.

## Example
For a fair die, \(F_X(3)=P(X\le 3)=3/6=0.5\).

## See also
- [PMF (Probability Mass Function)](../probability-stats/pmf.md)
- [PDF (Probability Density Function)](../probability-stats/pdf.md)
