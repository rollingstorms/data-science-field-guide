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
## How to Compute (Pseudocode)
```text
Input: objective f, gradient grad_f, Hessian hess_f, initial x0, iterations T
Output: approximate minimizer x

x <- x0
for k from 1 to T:
  g <- grad_f(x)
  H <- hess_f(x)
  solve H * delta = g
  x <- x - delta        # optionally use damping/line search
return x
```

## Complexity
- Time: Per iteration cost is dominated by gradient/Hessian evaluation and solving a linear system (dense solve often \(O(p^3)\) for \(p\) variables)
- Space: Often \(O(p^2)\) to store a dense Hessian plus \(O(p)\) vectors
- Assumptions: Dense full-Newton workflow shown; quasi-Newton and Hessian-vector methods have different costs and memory profiles

## See also
- [Gradient Descent](../optimization/gradient-descent.md)
