---
id: linalg.eigendecomposition
title: Eigendecomposition
tags: [linear-algebra, matrix-decomposition]
related: [linalg.svd, linalg.diagonalization]
prereqs: [linalg.eigenvalues]
---

# Eigendecomposition

<div class="formula" markdown="1">
## Formula
\[
A = Q\,\Lambda\,Q^{-1}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\): square matrix
- \(Q\): matrix of eigenvectors
- \(\Lambda\): diagonal matrix of eigenvalues

</div>
## What it means
Represents a linear map in a basis where it only scales coordinates.



## What it's used for
- Diagonalizing matrices for fast powers and analysis.
- Understanding modes in linear systems.
## Key properties
- If \(A\) is symmetric: \(A = Q\,\Lambda\,Q^T\) with orthonormal \(Q\)
- Diagonalization exists when \(A\) has a full eigenbasis

## Common gotchas
- Not every matrix is diagonalizable.
- For defective matrices, Jordan form is needed.



## Example
For \(A=\operatorname{diag}(2,1)\),
\(\lambda_1=2,\lambda_2=1\) with eigenvectors \(e_1,e_2\).
## How to Compute (Pseudocode)
```text
Input: square matrix A (n x n)
Output: eigenvalues Lambda and eigenvectors Q (when diagonalizable)

# High-level dense workflow
reduce A to Hessenberg form (or tridiagonal if symmetric)
run a QR-based eigenvalue algorithm until convergence
recover eigenvectors from accumulated transformations (if requested)
return Q, Lambda
```

## Complexity
- Time: Typically \(O(n^3)\) for dense eigendecomposition of an \(n \times n\) matrix
- Space: \(O(n^2)\) for dense matrix/factor storage
- Assumptions: Dense direct methods; symmetric matrices use specialized routines and have better constants but same cubic Big O in dense settings

## See also
- [SVD](../linear-algebra/svd.md)
