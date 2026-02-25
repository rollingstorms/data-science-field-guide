---
id: calc.gradient
title: Gradient
tags: [calculus, multivariable, optimization]
related: [calc.partial-derivative, calc.hessian]
prereqs: [calc.partial-derivative]
---

# Gradient

<div class="formula" markdown="1">
## Formula
\[
\nabla f(x)=
\begin{bmatrix}
\frac{\partial f}{\partial x_1} \\
\vdots \\
\frac{\partial f}{\partial x_n}
\end{bmatrix}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(f:\mathbb{R}^n\to\mathbb{R}\): scalar-valued function
- \(\nabla f(x)\): vector of partial derivatives

</div>
## What it means
The gradient points in the direction of steepest increase of a scalar function.

## What it's used for
- Gradient descent and optimization.
- Sensitivity analysis in multivariable models.

## Key properties
- \(-\nabla f(x)\) is the steepest descent direction locally.
- Orthogonal to level sets (under regularity conditions).

## Common gotchas
- Row vs column vector conventions differ.
- Gradient magnitude depends on feature scaling.

## Example
For \(f(x,y)=x^2+y^2\), \(\nabla f=(2x,2y)\).

## How to Compute (Pseudocode)
```text
Input: scalar function f(x1, ..., xn), point x in R^n
Output: gradient vector grad

for j from 1 to n:
  grad[j] <- partial derivative of f with respect to x_j evaluated at x

return grad
```

## Complexity
- Time: \(O(n)\) partial-derivative evaluations at a high level
- Space: \(O(n)\) to store the gradient vector
- Assumptions: Excludes the internal cost of each partial derivative evaluation; automatic differentiation can change constants and practical cost

## See also
- [Partial Derivative](../calculus/partial-derivative.md)
- [Hessian](../calculus/hessian.md)
