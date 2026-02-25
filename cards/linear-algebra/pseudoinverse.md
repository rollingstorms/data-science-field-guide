---
id: linalg.pseudoinverse
title: Pseudo-inverse (Moore-Penrose)
tags: [linear-algebra]
related: [linalg.svd, linalg.least-squares]
prereqs: [linalg.svd]
---

# Pseudo-inverse (Moore-Penrose)

<div class="formula" markdown="1">
## Formula
\[
A^+ = V\Sigma^+ U^\top \quad \text{if } A=U\Sigma V^\top
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\): matrix (possibly non-square or rank-deficient)
- \(A^+\): Moore-Penrose pseudoinverse
- \(U,\Sigma,V\): SVD factors

</div>
## What it means
The pseudoinverse generalizes matrix inversion to non-square or singular matrices.

## What it's used for
- Least-squares solutions.
- Minimum-norm solutions to underdetermined systems.

## Key properties
- Equals \(A^{-1}\) when \(A\) is invertible square.
- Computed robustly via SVD.

## Common gotchas
- Direct formulas like \((A^\top A)^{-1}A^\top\) require rank assumptions.
- Numerical thresholds affect small singular values.

## Example
In linear regression, \(x^*=A^+b\) gives a least-squares solution.

## How to Compute (Pseudocode)
```text
Input: matrix A
Output: pseudoinverse A^+

compute SVD: A = U Sigma V^T
invert nonzero singular values in Sigma to form Sigma^+
set very small singular values to zero (tolerance-based)
return A^+ = V Sigma^+ U^T
```

## Complexity
- Time: Dominated by SVD computation (dense full SVD is typically polynomial and often cubic in matrix dimensions)
- Space: Depends on storing SVD factors and the pseudoinverse matrix
- Assumptions: SVD-based pseudoinverse shown; tolerance choice affects numerical rank and stability

## See also
- [Singular Value Decomposition (SVD)](../linear-algebra/svd.md)
- [Least Squares](../linear-algebra/least-squares.md)
