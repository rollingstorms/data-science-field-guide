---
id: opt.newton-method
title: Newton's Method
tags: [optimization, second-order]
related: [opt.gradient-descent]
prereqs: [opt.hessian]
---

# Newton's Method

## Formula
\[
x_{k+1} = x_k - \big(\nabla^2 f(x_k)\big)^{-1}\nabla f(x_k)
\]

## Parameters
- \(\nabla^2 f\): Hessian matrix
- \(\nabla f\): gradient

## What it means
Uses curvature information for faster local convergence.

## Key properties
- Quadratic convergence near a minimizer under regularity conditions
- Often combined with line search or damping

## Common gotchas
- Hessian must be invertible; not guaranteed in nonconvex problems.
- Can be expensive for large-scale problems.

## See also
- [Gradient Descent](../optimization/gradient-descent.md)
