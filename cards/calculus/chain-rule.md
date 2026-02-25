---
id: calc.chain-rule
title: Chain Rule
tags: [calculus]
related: [calc.multivariable-chain-rule, dl.backpropagation]
prereqs: [calc.derivative]
---

# Chain Rule

<div class="formula" markdown="1">
## Formula
\[
\frac{d}{dx} f(g(x)) = f'(g(x))\,g'(x)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(g(x)\): inner function
- \(f(\cdot)\): outer function

</div>
## What it means
The derivative of a composition is the product of the outer derivative (evaluated at the inner function) and the inner derivative.

## What it's used for
- Differentiating nested expressions.
- Backpropagation in neural networks.

## Key properties
- Applies repeatedly through deep compositions.
- Generalizes to Jacobians in multivariable settings.

## Common gotchas
- Forgetting to evaluate the outer derivative at \(g(x)\).
- Missing inner derivatives in long compositions.

## Example
If \(f(u)=u^2\) and \(g(x)=\sin x\), then \(\frac{d}{dx}(\sin x)^2 = 2\sin x \cos x\).

## How to Compute (Pseudocode)
```text
Input: outer function f, inner function g, point x
Output: derivative of h(x) = f(g(x)) at x

u <- g(x)
inner_deriv <- g'(x)
outer_deriv <- f'(u)
return outer_deriv * inner_deriv
```

## Complexity
- Time: \(O(1)\) high-level composition steps, plus the costs of evaluating \(g(x)\), \(g'(x)\), and \(f'(g(x))\)
- Space: \(O(1)\)
- Assumptions: This is the scalar single-composition case; nested compositions scale with the number of layers/operations

## See also
- [Multivariable Chain Rule](../calculus/multivariable-chain-rule.md)
- [Backpropagation](../deep-learning/backpropagation.md)
