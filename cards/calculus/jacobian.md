---
id: calc.jacobian
title: Jacobian
tags: [calculus, multivariable, linear-algebra]
related: [calc.gradient, calc.multivariable-chain-rule]
prereqs: [calc.partial-derivative]
---

# Jacobian

<div class="formula" markdown="1">
## Formula
\[
J_f(x)=\left[\frac{\partial f_i}{\partial x_j}\right]_{i,j}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(f:\mathbb{R}^n\to\mathbb{R}^m\): vector-valued function
- \(J_f(x)\in\mathbb{R}^{m\times n}\): Jacobian matrix

</div>
## What it means
The Jacobian is the matrix of first-order partial derivatives for a vector-valued function.

## What it's used for
- Linearization of nonlinear maps.
- Multivariable chain rule and backpropagation.

## Key properties
- Generalizes the gradient (for \(m=1\)).
- Locally approximates \(f(x+\Delta x)\approx f(x)+J_f(x)\Delta x\).

## Common gotchas
- Different communities use transposed conventions.
- Shape mismatches are common in implementation.

## Example
If \(f(x,y)=(x+y,xy)\), then \(J_f=\begin{bmatrix}1&1\\ y&x\end{bmatrix}\).

## How to Compute (Pseudocode)
```text
Input: vector function f=(f1,...,fm): R^n -> R^m, point x
Output: Jacobian matrix J of size m x n

for i from 1 to m:
  for j from 1 to n:
    J[i,j] <- partial derivative of f_i with respect to x_j evaluated at x

return J
```

## Complexity
- Time: \(O(mn)\) partial-derivative evaluations at a high level
- Space: \(O(mn)\) to store the Jacobian matrix
- Assumptions: Excludes the internal cost of each derivative evaluation; structured/autodiff methods may compute Jacobian-vector products more efficiently than forming the full matrix

## See also
- [Gradient](../calculus/gradient.md)
- [Multivariable Chain Rule](../calculus/multivariable-chain-rule.md)
