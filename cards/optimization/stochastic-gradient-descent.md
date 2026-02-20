---
id: opt.stochastic-gradient-descent
title: Stochastic Gradient Descent
tags: [optimization, stochastic]
related: [opt.gradient-descent]
prereqs: [opt.gradient-descent]
---

# Stochastic Gradient Descent

## Formula
\[
x_{k+1} = x_k - \eta_k\,g_k,\quad \mathbb{E}[g_k\mid x_k]=\nabla f(x_k)
\]

## Parameters
- \(g_k\): stochastic gradient estimate
- \(\eta_k\): step size

## What it means
Uses noisy gradient estimates to optimize large-scale objectives.

## Key properties
- Cheap per-iteration updates
- Converges in expectation under step-size schedules

## Common gotchas
- Variance can slow convergence; use momentum/averaging.
- Requires careful tuning of \(\eta_k\).

## See also
- [Gradient Descent](../optimization/gradient-descent.md)
