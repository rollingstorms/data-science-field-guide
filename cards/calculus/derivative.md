---
id: calc.derivative
title: Derivative
tags: [calculus]
related: [calc.partial-derivative, calc.chain-rule]
prereqs: []
---

# Derivative

<div class="formula" markdown="1">
## Formula
\[
f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(f(x)\): scalar function
- \(h\): small change in input
- \(f'(x)\): instantaneous rate of change

</div>
## What it means
The derivative measures how fast a function changes at a point.

## What it's used for
- Slopes, optimization, and local approximation.
- Building gradients and backpropagation.

## Key properties
- Linear operator.
- Gives slope of the tangent line for scalar functions.

## Common gotchas
- Differentiability is stronger than continuity.
- A function can be continuous but not differentiable at a point.

## Example
If \(f(x)=x^2\), then \(f'(x)=2x\).

## See also
- [Partial Derivative](../calculus/partial-derivative.md)
- [Chain Rule](../calculus/chain-rule.md)
