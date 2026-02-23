---
id: prob.gamma-distribution
title: Gamma Distribution
tags: [probability, statistics, distribution, continuous]
related: [prob.exponential-distribution, prob.beta-distribution]
prereqs: [prob.pdf]
---

# Gamma Distribution

<div class="formula" markdown="1">
## Formula
\[
f(x)=\frac{\beta^\alpha}{\Gamma(\alpha)}x^{\alpha-1}e^{-\beta x},\quad x\ge 0
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\alpha>0\): shape
- \(\beta>0\): rate (one common parameterization)
- \(\Gamma(\alpha)\): gamma function

</div>
## What it means
A flexible positive-valued distribution that generalizes the exponential distribution.

## What it's used for
- Waiting times for multiple Poisson events.
- Bayesian priors for rates/precisions.

## Key properties
- Mean \(\alpha/\beta\), variance \(\alpha/\beta^2\) (rate form).
- Exponential is the special case \(\alpha=1\).

## Common gotchas
- Scale-vs-rate parameterization varies across sources.
- Shape near \(<1\) changes density behavior near zero.

## Example
The waiting time until the 3rd Poisson event follows a Gamma distribution.

## See also
- [Exponential Distribution](../probability-stats/exponential-distribution.md)
- [Beta Distribution](../probability-stats/beta-distribution.md)
