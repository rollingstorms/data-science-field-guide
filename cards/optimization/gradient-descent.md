---
id: opt.gradient-descent
title: Gradient Descent
tags: [optimization, first-order]
related: [opt.line-search, opt.stochastic-gradient-descent]
prereqs: [opt.gradient]
---

# Gradient Descent

## Formula
\[
x_{k+1} = x_k - \eta_k\,\nabla f(x_k)
\]

## Parameters
- \(\eta_k\): step size (learning rate)
- \(\nabla f\): gradient

## What it means
Iteratively moves downhill along the steepest descent direction.

## Key properties
- Converges for convex, smooth functions with suitable step sizes
- Step size can be fixed or found by line search

## Common gotchas
- Too large \(\eta_k\) causes divergence; too small slows convergence.
- Can stall at saddle points in nonconvex problems.

## See also
- [Line Search](../optimization/line-search.md)
