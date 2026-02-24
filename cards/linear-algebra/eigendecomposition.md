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
## See also
- [SVD](../linear-algebra/svd.md)
