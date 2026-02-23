---
id: calc.taylor-expansion
title: Taylor Expansion
tags: [calculus, approximation]
related: [calc.derivative, calc.hessian]
prereqs: [calc.derivative]
---

# Taylor Expansion

<div class="formula" markdown="1">
## Formula
\[
f(x)\approx f(a)+f'(a)(x-a)+\frac{f''(a)}{2}(x-a)^2+\cdots
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(a\): expansion point
- \(f^{(k)}(a)\): \(k\)-th derivative at \(a\)

</div>
## What it means
Approximates a smooth function locally by a polynomial around a point.

## What it's used for
- Local approximations and error analysis.
- Deriving Newton and second-order optimization methods.

## Key properties
- Accuracy improves near the expansion point (under smoothness).
- First-order term gives linearization; second-order adds curvature.

## Common gotchas
- Approximation quality can be poor far from \(a\).
- Not every smooth function equals its Taylor series globally.

## Example
\(e^x \approx 1+x\) near \(x=0\) (first-order Taylor approximation).

## See also
- [Derivative](../calculus/derivative.md)
- [Hessian](../calculus/hessian.md)
