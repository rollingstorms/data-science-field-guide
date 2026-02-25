---
id: linalg.determinant
title: Determinant
tags: [linear-algebra]
related: [linalg.trace, linalg.eigenvalues-eigenvectors]
prereqs: []
---

# Determinant

<div class="formula" markdown="1">
## Formula
\[
\det(A)
\]

\[
A \text{ invertible } \iff \det(A)\ne 0
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\): square matrix
- \(\det(A)\): signed volume scaling factor

</div>
## What it means
The determinant measures volume scaling (and orientation sign) of the linear map defined by a matrix.

## What it's used for
- Invertibility checks.
- Change-of-variables and geometry.

## Key properties
- \(\det(AB)=\det(A)\det(B)\).
- Determinant is zero iff columns/rows are linearly dependent.

## Common gotchas
- Determinants are numerically unstable for large systems; use factorizations instead.
- Large determinant magnitude does not directly imply good conditioning.

## Example
\(\det\!\begin{bmatrix}a&b\\c&d\end{bmatrix}=ad-bc\).

## How to Compute (Pseudocode)
```text
Input: square matrix A
Output: det(A)

compute an LU decomposition with row permutations: P A = L U
sign <- sign of the permutation matrix P
detA <- sign * product of diagonal entries of U
return detA
```

## Complexity
- Time: \(O(n^3)\) for dense \(n\times n\) matrices using LU-type methods
- Space: \(O(n^2)\) for dense matrix/factor storage
- Assumptions: LU-based numerical computation shown; direct cofactor expansion is exponentially expensive and used only for tiny symbolic examples

## See also
- [Eigenvalues and Eigenvectors](../linear-algebra/eigenvalues-eigenvectors.md)
- [Condition Number](../linear-algebra/condition-number.md)
