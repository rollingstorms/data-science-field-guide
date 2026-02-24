---
id: opt.gradient-descent
title: Gradient Descent
tags: [optimization, first-order]
related: [opt.line-search, opt.stochastic-gradient-descent]
prereqs: [opt.gradient]
---

# Gradient Descent

<div class="formula" markdown="1">
## Formula
\[
x_{k+1} = x_k - \eta_k\,\nabla f(x_k)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\eta_k\): step size (learning rate)
- \(\nabla f\): gradient

</div>
## What it means
Iteratively moves downhill along the steepest descent direction.



## What it's used for
- Minimizing differentiable objectives.
- Training ML models with large datasets.
## Key properties
- Converges for convex, smooth functions with suitable step sizes
- Step size can be fixed or found by line search

## Common gotchas
- Too large \(\eta_k\) causes divergence; too small slows convergence.
- Can stall at saddle points in nonconvex problems.



## Example
For \(f(x)=x^2\), \(x_0=1\), \(lpha=0.1\):
\(x_1=1-0.1\cdot2\cdot1=0.8\).
## See also
- [Line Search](../optimization/line-search.md)
