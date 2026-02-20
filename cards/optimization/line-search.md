---
id: opt.line-search
title: Line Search
tags: [optimization]
related: [opt.gradient-descent]
prereqs: [opt.gradient-descent]
---

# Line Search

## Formula
\[
\eta_k = \arg\min_{\eta>0} f\big(x_k - \eta\,\nabla f(x_k)\big)
\]

## Parameters
- \(\eta\): step size
- \(\nabla f\): descent direction (often the gradient)

## What it means
Chooses a step size that reduces the objective along a direction.

## Key properties
- Exact line search minimizes along the ray
- In practice, backtracking or Wolfe conditions are used

## Common gotchas
- Exact line search is rarely cheap or necessary.
- Poor line search can negate descent guarantees.

## See also
- [Gradient Descent](../optimization/gradient-descent.md)
