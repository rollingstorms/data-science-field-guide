---
id: opt.newton-method
title: Newton's Method
tags: [optimization, second-order]
related: [opt.gradient-descent]
prereqs: [opt.hessian]
---

# Newton's Method

<div class="formula" markdown="1">
## Formula
\[
x_{k+1} = x_k - \big(\nabla^2 f(x_k)\big)^{-1}\nabla f(x_k)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\nabla^2 f\): Hessian matrix
- \(\nabla f\): gradient

</div>
## What it means
Uses curvature information for faster local convergence.



## What it's used for
- Fast local convergence for smooth optimization.
- Root-finding for nonlinear equations.
## Key properties
- Quadratic convergence near a minimizer under regularity conditions
- Often combined with line search or damping

## Common gotchas
- Hessian must be invertible; not guaranteed in nonconvex problems.
- Can be expensive for large-scale problems.



## Example
For \(f(x)=x^2-2\), \(x_0=1\):
\(x_1=1-(-1)/2=1.5\).
## See also
- [Gradient Descent](../optimization/gradient-descent.md)
