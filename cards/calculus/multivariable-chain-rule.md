---
id: calc.multivariable-chain-rule
title: Multivariable Chain Rule
tags: [calculus, multivariable, linear-algebra]
related: [calc.jacobian, dl.backpropagation]
prereqs: [calc.jacobian]
---

# Multivariable Chain Rule

<div class="formula" markdown="1">
## Formula
\[
J_{f\circ g}(x)=J_f(g(x))\,J_g(x)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(g:\mathbb{R}^n\to\mathbb{R}^m\)
- \(f:\mathbb{R}^m\to\mathbb{R}^p\)
- \(J_f,J_g\): Jacobians

</div>
## What it means
The Jacobian of a composition is the matrix product of Jacobians in the correct order.

## What it's used for
- Backpropagation and autodiff.
- Differentiating layered vector-valued systems.

## Key properties
- Matrix dimensions determine the valid multiplication order.
- Scalar chain rule is a special case.

## Common gotchas
- Row/column convention mismatches can transpose the formula.
- Composition order and multiplication order are easy to reverse.

## Example
For neural nets, gradients propagate through layers by repeated Jacobian products (implicitly via vector-Jacobian products).

## See also
- [Jacobian](../calculus/jacobian.md)
- [Backpropagation](../deep-learning/backpropagation.md)
