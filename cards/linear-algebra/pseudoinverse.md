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

## See also
- [Singular Value Decomposition (SVD)](../linear-algebra/svd.md)
- [Least Squares](../linear-algebra/least-squares.md)
