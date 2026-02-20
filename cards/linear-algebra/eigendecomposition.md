---
id: linalg.eigendecomposition
title: Eigendecomposition
tags: [linear-algebra, matrix-decomposition]
related: [linalg.svd, linalg.diagonalization]
prereqs: [linalg.eigenvalues]
---

# Eigendecomposition

## Formula
\[
A = Q\,\Lambda\,Q^{-1}
\]

## Parameters
- \(A\): square matrix
- \(Q\): matrix of eigenvectors
- \(\Lambda\): diagonal matrix of eigenvalues

## What it means
Represents a linear map in a basis where it only scales coordinates.

## Key properties
- If \(A\) is symmetric: \(A = Q\,\Lambda\,Q^T\) with orthonormal \(Q\)
- Diagonalization exists when \(A\) has a full eigenbasis

## Common gotchas
- Not every matrix is diagonalizable.
- For defective matrices, Jordan form is needed.

## See also
- [SVD](../linear-algebra/svd.md)
