---
id: prob.chebyshev-inequality
title: Chebyshev's Inequality
tags: [probability, bounds]
related: [prob.variance]
prereqs: [prob.variance]
---

# Chebyshev's Inequality

## Formula
\[
P(|X-\mu| \ge k\sigma) \le \frac{1}{k^2},\quad k>0
\]

## Parameters
- \(\mu=\mathbb{E}[X]\)
- \(\sigma=\sqrt{\operatorname{Var}(X)}\)

## What it means
Bounds the probability of large deviations using only mean and variance.

## Key properties
- Distribution-free
- Often loose for light-tailed distributions

## Common gotchas
- Applies to any distribution with finite variance.
- Use sharper bounds when additional assumptions are known.

## See also
- [Variance](../probability-stats/variance.md)
