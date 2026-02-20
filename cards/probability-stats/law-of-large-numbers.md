---
id: prob.law-of-large-numbers
title: Law of Large Numbers
tags: [probability, asymptotics]
related: [prob.expectation]
prereqs: [prob.expectation]
---

# Law of Large Numbers

## Formula
\[
\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i \xrightarrow[]{\;P\;} \mu
\]

## Parameters
- \(X_i\): i.i.d. random variables
- \(\mu=\mathbb{E}[X_i]\)

## What it means
Sample averages converge in probability to the true mean.

## Key properties
- Weak LLN: convergence in probability
- Strong LLN: almost sure convergence (under stronger conditions)

## Common gotchas
- Requires identical distribution and finite mean.
- Convergence in probability does not imply convergence almost surely.

## See also
- [Expectation](../probability-stats/expectation.md)
