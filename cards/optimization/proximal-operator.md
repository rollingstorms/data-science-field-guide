---
id: opt.proximal-operator
title: Proximal Operator
tags: [optimization, convex-analysis]
related: [opt.duality]
prereqs: [opt.convex-function]
---

# Proximal Operator

<div class="formula" markdown="1">
## Formula
\[
\operatorname{prox}_{\lambda f}(v) = \arg\min_x \left(f(x) + \frac{1}{2\lambda}\|x-v\|_2^2\right)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(f\): convex function
- \(\lambda>0\): step size
- \(v\): input point

</div>
## What it means
Balances staying near \(v\) with lowering \(f(x)\).



## What it's used for
- Solving nonsmooth problems with proximal gradient methods.
- Handling L1 or TV regularization.
## Key properties
- Generalizes projection onto a convex set
- Used in proximal gradient and ADMM methods

## Common gotchas
- Requires closed, proper, convex \(f\) for standard guarantees.
- Some prox operators have closed form; others need inner solves.



## Example
For \(f(x)=|x|\),
\(\operatorname{prox}_{\lambda f}(v)=\mathrm{sign}(v)\max(|v|-\lambda,0)\).
Example: \(v=3,\lambda=1\Rightarrow 2\).
## How to Compute (Pseudocode)
```text
Input: point v, step size lambda, function f, prox solver/closed form
Output: prox_{lambda f}(v)

if a closed-form prox for f is known:
  apply the closed-form update (for example, soft-thresholding for L1)
else:
  solve the inner optimization problem
    argmin_x f(x) + (1/(2*lambda)) * ||x - v||^2
return the solution
```

## Complexity
- Time: Depends on the function \(f\); some proximal operators are \(O(p)\) closed-form maps, while others require iterative inner solves
- Space: Depends on whether the prox is closed-form or solved iteratively (typically at least \(O(p)\) for vector inputs)
- Assumptions: Proximal workflow shown for convex settings; complexity is prox-specific and often dominates proximal-gradient step cost only when no closed form exists

## See also
- [Lagrangian Duality](../optimization/duality.md)
