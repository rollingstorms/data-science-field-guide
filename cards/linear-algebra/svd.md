---
id: linalg.svd
title: Singular Value Decomposition (SVD)
tags: [linear-algebra, matrix-decomposition]
related: [linalg.eigendecomposition, linalg.pca, linalg.rank]
prereqs: [linalg.orthonormal-basis]
---

# Singular Value Decomposition (SVD)

## Formula
\[
A = U\,\Sigma\,V^T
\]

## Parameters
- \(A\in\mathbb{R}^{m\times n}\)
- \(U\in\mathbb{R}^{m\times m}\): orthonormal columns (left singular vectors)
- \(\Sigma\in\mathbb{R}^{m\times n}\): diagonal nonnegative singular values
- \(V\in\mathbb{R}^{n\times n}\): orthonormal columns (right singular vectors)

## What it means
Decomposes any matrix into rotations/reflections and axis-aligned scaling.

## Key properties
- Singular values are \(\sqrt{\lambda_i(A^T A)}\)
- Best rank-\(k\) approximation via truncation (Eckart-Young)
- Works for non-square and non-symmetric matrices

## Common gotchas
- SVD is not unique: signs and subspaces can flip when singular values repeat.
- \(U\) and \(V\) are orthonormal, not necessarily square if using thin SVD.

## See also
- [Eigendecomposition](../linear-algebra/eigendecomposition.md)
