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
## See also
- [Lagrangian Duality](../optimization/duality.md)
