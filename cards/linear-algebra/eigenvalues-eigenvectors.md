---
id: linalg.eigenvalues-eigenvectors
title: Eigenvalues and Eigenvectors
tags: [linear-algebra]
related: [linalg.eigendecomposition, linalg.determinant]
prereqs: []
---

# Eigenvalues and Eigenvectors

<div class="formula" markdown="1">
## Formula
\[
Av=\lambda v,\quad v\ne 0
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\): square matrix
- \(v\): eigenvector
- \(\lambda\): eigenvalue

</div>
## What it means
An eigenvector keeps its direction under \(A\), scaled by eigenvalue \(\lambda\).

## What it's used for
- Stability analysis and dynamical systems.
- PCA/spectral methods and matrix factorizations.

## Key properties
- Eigenvalues solve \(\det(A-\lambda I)=0\).
- Not every matrix is diagonalizable.

## Common gotchas
- Eigenvectors are defined up to nonzero scaling.
- Complex eigenvalues/eigenvectors can arise from real matrices.

## Example
For \(A=\operatorname{diag}(2,3)\), basis vectors are eigenvectors with eigenvalues 2 and 3.

## See also
- [Eigendecomposition](../linear-algebra/eigendecomposition.md)
- [Determinant](../linear-algebra/determinant.md)
