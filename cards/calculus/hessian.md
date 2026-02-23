---
id: calc.hessian
title: Hessian
tags: [calculus, multivariable, optimization]
related: [calc.gradient, opt.newton-method]
prereqs: [calc.gradient]
---

# Hessian

<div class="formula" markdown="1">
## Formula
\[
H_f(x)=\left[\frac{\partial^2 f}{\partial x_i \partial x_j}\right]_{i,j}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(f:\mathbb{R}^n\to\mathbb{R}\): scalar-valued function
- \(H_f(x)\): matrix of second partial derivatives

</div>
## What it means
The Hessian captures local curvature of a scalar function.

## What it's used for
- Newton-type optimization methods.
- Determining curvature and classifying critical points.

## Key properties
- Symmetric when mixed partials are equal (smoothness conditions).
- Positive definite Hessian implies local strict convexity (locally).

## Common gotchas
- Computing full Hessians is expensive in high dimensions.
- Indefinite Hessians can cause Newton steps to fail without damping.

## Example
For \(f(x,y)=x^2+3y^2\), \(H_f=\begin{bmatrix}2&0\\0&6\end{bmatrix}\).

## See also
- [Gradient](../calculus/gradient.md)
- [Newton's Method](../optimization/newton-method.md)
