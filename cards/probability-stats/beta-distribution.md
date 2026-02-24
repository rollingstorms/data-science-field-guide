---
id: prob.beta-distribution
title: Beta Distribution
tags: [probability, statistics, distribution, continuous]
related: [prob.bernoulli-distribution, prob.gamma-distribution]
prereqs: [prob.pdf]
---

# Beta Distribution

<div class="formula" markdown="1">
## Formula
\[
f(x)=\frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha,\beta)},\quad 0\le x \le 1
\]

</div>
## Plot
```plot
fn: 6*x*(1-x)
xmin: 0
xmax: 1
ymin: 0
ymax: 1.7
height: 280
title: Beta PDF (alpha=2, beta=2)
```

<div class="parameters" markdown="1">
## Parameters
- \(\alpha,\beta>0\): shape parameters
- \(B(\alpha,\beta)\): beta function

</div>
## What it means
A flexible distribution on \([0,1]\), often used to model probabilities.

## What it's used for
- Bayesian priors/posteriors for Bernoulli/binomial probabilities.
- Modeling proportions.

## Key properties
- Shape can be uniform, U-shaped, unimodal, etc.
- Mean \( \alpha/(\alpha+\beta)\).

## Common gotchas
- Different shapes can have the same mean.
- Parameters are not directly mean/variance unless reparameterized.

## Example
\(\mathrm{Beta}(1,1)\) is the uniform distribution on \([0,1]\).

## See also
- [Bernoulli Distribution](../probability-stats/bernoulli-distribution.md)
- [Uniform Distribution](../probability-stats/uniform-distribution.md)
