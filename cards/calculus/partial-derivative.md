---
id: calc.partial-derivative
title: Partial Derivative
tags: [calculus, multivariable]
related: [calc.gradient, calc.jacobian]
prereqs: [calc.derivative]
---

# Partial Derivative

<div class="formula" markdown="1">
## Formula
\[
\frac{\partial f}{\partial x_i}(x)=
\lim_{h\to 0}\frac{f(x_1,\dots,x_i+h,\dots,x_n)-f(x)}{h}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(f:\mathbb{R}^n\to\mathbb{R}\): multivariable function
- \(x_i\): \(i\)-th input variable

</div>
## What it means
A partial derivative measures how \(f\) changes with respect to one variable while holding the others fixed.

## What it's used for
- Multivariable optimization.
- Constructing gradients and Jacobians.

## Key properties
- One partial derivative per input coordinate.
- Can exist even when the function is not fully differentiable.

## Common gotchas
- Holding other variables fixed is essential.
- Mixed partials may require smoothness assumptions to be equal.

## Example
For \(f(x,y)=x^2y+y\), \(\partial f/\partial x = 2xy\) and \(\partial f/\partial y=x^2+1\).

## How to Compute (Pseudocode)
```text
Input: function f(x1,...,xn), point x, coordinate i, small step h
Output: approximate partial derivative d f / d x_i at x

x_plus <- copy of x
x_minus <- copy of x
x_plus[i] <- x_plus[i] + h
x_minus[i] <- x_minus[i] - h

return (f(x_plus) - f(x_minus)) / (2h)
```

## Complexity
- Time: \(O(1)\) function evaluations (2 evaluations of \(f\)) for this finite-difference estimate
- Space: \(O(n)\) if copies of the input vector are materialized (or \(O(1)\) extra with in-place perturbation/restoration)
- Assumptions: Excludes the internal cost of evaluating \(f\); symbolic or automatic differentiation follows different computational workflows

## See also
- [Gradient](../calculus/gradient.md)
- [Jacobian](../calculus/jacobian.md)
