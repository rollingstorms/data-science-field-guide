---
id: opt.proximal-operator
title: Proximal Operator
tags: [optimization, convex-analysis]
related: [opt.duality]
prereqs: [opt.convex-function]
---

# Proximal Operator

## Formula
\[
\operatorname{prox}_{\lambda f}(v) = \arg\min_x \left(f(x) + \frac{1}{2\lambda}\|x-v\|_2^2\right)
\]

## Parameters
- \(f\): convex function
- \(\lambda>0\): step size
- \(v\): input point

## What it means
Balances staying near \(v\) with lowering \(f(x)\).

## Key properties
- Generalizes projection onto a convex set
- Used in proximal gradient and ADMM methods

## Common gotchas
- Requires closed, proper, convex \(f\) for standard guarantees.
- Some prox operators have closed form; others need inner solves.

## See also
- [Lagrangian Duality](../optimization/duality.md)
