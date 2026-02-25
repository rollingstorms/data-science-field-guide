---
id: opt.duality
title: Lagrangian Duality
tags: [optimization, convex-analysis]
related: [opt.lagrangian, opt.kkt-conditions]
prereqs: [opt.lagrangian]
---

# Lagrangian Duality

<div class="formula" markdown="1">
## Formula
\[
\max_{\lambda\ge 0,\,\nu}\; \phi(\lambda,\nu) \quad \text{where}\quad \phi(\lambda,\nu)=\inf_x \mathcal{L}(x,\lambda,\nu)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\mathcal{L}\): Lagrangian
- \(\phi\): dual function

</div>
## What it means
Transforms a constrained primal problem into a (often easier) dual problem.



## What it's used for
- Bounding the optimal value and proving optimality.
- Deriving dual problems for easier optimization.
## Key properties
- Weak duality: dual value \(\le\) primal value
- Strong duality holds under Slater's condition for convex problems

## Common gotchas
- Dual optimum can be strictly less than primal in nonconvex settings.
- Dual variables correspond to constraints, not data.



## Example
For \(\min_x x^2\) subject to \(x\ge 1\), the primal optimum is 1
and strong duality holds (dual optimum also 1).
## How to Compute (Pseudocode)
```text
Input: constrained optimization problem and its Lagrangian L(x, lambda, nu)
Output: dual function/value (and dual solution if solved)

construct the Lagrangian L(x, lambda, nu)
compute the dual function phi(lambda, nu) <- inf_x L(x, lambda, nu)
solve the dual optimization problem over dual variables (subject to lambda >= 0)
return dual optimum and compare with primal optimum (if available)
```

## Complexity
- Time: Depends on the primal problem structure and whether the inner infimum and outer dual optimization admit closed forms or require numerical solves
- Space: Depends on the representation of primal/dual variables and solver state
- Assumptions: This is a dual-construction/solution workflow; convexity and Slater-type conditions affect tractability and strong-duality guarantees

## See also
- [Lagrangian](../optimization/lagrangian.md)
