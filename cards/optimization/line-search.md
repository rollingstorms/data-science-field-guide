---
id: opt.line-search
title: Line Search
tags: [optimization]
related: [opt.gradient-descent]
prereqs: [opt.gradient-descent]
---

# Line Search

<div class="formula" markdown="1">
## Formula
\[
\eta_k = \arg\min_{\eta>0} f\big(x_k - \eta\,\nabla f(x_k)\big)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\eta\): step size
- \(\nabla f\): descent direction (often the gradient)

</div>
## What it means
Chooses a step size that reduces the objective along a direction.



## What it's used for
- Choosing step sizes in descent methods.
- Ensuring sufficient decrease in optimization.
## Key properties
- Exact line search minimizes along the ray
- In practice, backtracking or Wolfe conditions are used

## Common gotchas
- Exact line search is rarely cheap or necessary.
- Poor line search can negate descent guarantees.



## Example
For \(f(x)=x^2\), at \(x=1\) with gradient 2,
exact line search gives \(lpha=0.5\) (next \(x=0\)).
## See also
- [Gradient Descent](../optimization/gradient-descent.md)
