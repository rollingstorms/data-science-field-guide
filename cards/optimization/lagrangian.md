---
id: opt.lagrangian
title: Lagrangian
tags: [optimization, constraints]
related: [opt.kkt-conditions, opt.duality]
prereqs: [opt.constrained-optimization]
---

# Lagrangian

<div class="formula" markdown="1">
## Formula
\[
\mathcal{L}(x,\lambda,\nu) = f(x) + \lambda^T g(x) + \nu^T h(x)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x\): primal variables
- \(g(x)\le 0\): inequality constraints
- \(h(x)=0\): equality constraints
- \(\lambda\ge 0\), \(\nu\): Lagrange multipliers

</div>
## What it means
Converts constrained optimization into an unconstrained objective by penalizing constraint violations.



## What it's used for
- Handling constraints by moving them into the objective.
- Deriving dual functions and KKT conditions.
## Key properties
- Stationary points of \(\mathcal{L}\) are candidates for constrained optima
- Leads to the dual function: \(\phi(\lambda,\nu)=\inf_x \mathcal{L}(x,\lambda,\nu)\)

## Common gotchas
- Multipliers are not "penalty weights" unless you fix them; they are variables.
- Inequality constraints require \(\lambda\ge 0\).



## Example
For \(\min x^2\) s.t. \(x=1\),
\(\mathcal{L}(x,\lambda)=x^2+\lambda(x-1)\).
## How to Compute (Pseudocode)
```text
Input: objective f(x), constraints g(x) <= 0 and h(x) = 0, multipliers lambda, nu
Output: Lagrangian value L(x, lambda, nu)

compute constraint values g(x), h(x)
L <- f(x) + lambda^T g(x) + nu^T h(x)
return L
```

## Complexity
- Time: Depends on the costs of evaluating the objective and constraint functions at \(x\)
- Space: Depends on the number of variables/constraints and any stored evaluations/Jacobians
- Assumptions: This card covers Lagrangian construction/evaluation; downstream use in dual/KKT methods adds solver-dependent cost

## See also
- [KKT Conditions](../optimization/kkt-conditions.md)
