---
id: prob.variance
title: Variance
tags: [probability, statistics, dispersion]
related: [prob.expectation, prob.standard-deviation, prob.covariance]
prereqs: [prob.expectation]
---

# Variance

## Formula
\[
\operatorname{Var}(X) = \mathbb{E}\big[(X-\mu)^2\big] = \mathbb{E}[X^2] - \mu^2
\]

## Parameters
- \(X\): random variable
- \(\mu = \mathbb{E}[X]\): mean

## What it means
Measures the average squared deviation from the mean.

## Key properties
- \(\operatorname{Var}(X)\ge 0\)
- \(\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X)\)
- \(\operatorname{Var}(X)=0\) iff \(X\) is almost surely constant

## Common gotchas
- Variance depends on squared units of \(X\).
- \(\mathbb{E}[X]^2\neq\mathbb{E}[X^2]\); don't drop the square.

## See also
- [Expectation](../probability-stats/expectation.md)
