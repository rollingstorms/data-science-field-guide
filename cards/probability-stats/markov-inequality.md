---
id: prob.markov-inequality
title: Markov's Inequality
tags: [probability, bounds]
related: [prob.expectation]
prereqs: [prob.expectation]
---

# Markov's Inequality

## Formula
\[
P(X \ge a) \le \frac{\mathbb{E}[X]}{a},\quad a>0
\]

## Parameters
- \(X\ge 0\): nonnegative random variable
- \(a\): positive threshold

## What it means
Upper-bounds tail probability using only the mean.

## Key properties
- Very general but often loose
- Basis for Chebyshev and other bounds

## Common gotchas
- Requires \(X\ge 0\).
- Bound can be vacuous if \(a\) is small.

## See also
- [Chebyshev's Inequality](../probability-stats/chebyshev-inequality.md)
