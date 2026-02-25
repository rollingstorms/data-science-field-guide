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

## How to Compute (Pseudocode)
```text
Input: function f, expansion point a, evaluation point x, order K
Output: Taylor approximation T_K(x)

T <- 0
for k from 0 to K:
  deriv_k <- k-th derivative of f evaluated at a
  T <- T + deriv_k * (x - a)^k / k!
return T
```

## Complexity
- Time: \(O(K)\) term accumulation once derivatives \(f^{(k)}(a)\) are available; derivative computation cost is additional
- Space: \(O(1)\) extra space (or \(O(K)\) if storing coefficients)
- Assumptions: Scalar Taylor expansion shown; symbolic or automatic derivative computation can dominate runtime

## See also
- [Derivative](../calculus/derivative.md)
- [Hessian](../calculus/hessian.md)
