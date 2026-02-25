---
id: prob.jensen-inequality
title: Jensen's Inequality
tags: [probability, convexity]
related: [prob.expectation]
prereqs: [prob.expectation]
---

# Jensen's Inequality

<div class="formula" markdown="1">
## Formula
\[
\varphi(\mathbb{E}[X]) \le \mathbb{E}[\varphi(X)] \quad \text{for convex } \varphi
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\varphi\): convex function
- \(X\): random variable

</div>
## What it means
Applying a convex function after expectation underestimates the expectation after applying the function.



## What it's used for
- Bounding expectations of convex/concave functions.
- Deriving variational bounds.
## Key properties
- Reverses for concave \(\varphi\)
- Equality iff \(X\) is a.s. constant or \(\varphi\) is linear on support

## Common gotchas
- Direction depends on convex vs concave.
- Requires \(\mathbb{E}[|\varphi(X)|]\) to be finite.



## Example
Let \(\phi(x)=x^2\) and \(X\in\{0,2\}\) equally likely.
Then \(E[\phi(X)]=2\) and \(\phi(E[X])=1\),
so \(E[\phi(X)]\ge \phi(E[X])\).
## How to Compute (Pseudocode)
```text
Input: assumptions/quantities required by the theorem or inequality (for example means, variances, sample size)
Output: bound, approximation, or theorem-based diagnostic

verify the theorem/inequality assumptions (at least approximately/in modeling terms)
compute the bound or approximation using the card formula
return the resulting bound/approximation and note its conditions
```

## Complexity
- Time: Usually \(O(1)\) once the required summary quantities are available
- Space: \(O(1)\)
- Assumptions: This is a formula-application workflow; estimating required moments/parameters from data can dominate cost (often \(O(n)\))

## See also
- [Expectation](../probability-stats/expectation.md)
