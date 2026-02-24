---
id: linalg.svd
title: Singular Value Decomposition (SVD)
tags: [linear-algebra, matrix-decomposition]
related: [linalg.eigendecomposition, linalg.pca, linalg.rank]
prereqs: [linalg.orthonormal-basis]
---

# Singular Value Decomposition (SVD)

<div class="formula" markdown="1">
## Formula
\[
A = U\,\Sigma\,V^T
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\in\mathbb{R}^{m\times n}\)
- \(U\in\mathbb{R}^{m\times m}\): orthonormal columns (left singular vectors)
- \(\Sigma\in\mathbb{R}^{m\times n}\): diagonal nonnegative singular values
- \(V\in\mathbb{R}^{n\times n}\): orthonormal columns (right singular vectors)

</div>
## What it means
Decomposes any matrix into rotations/reflections and axis-aligned scaling.



## What it's used for
- Low-rank approximation and PCA.
- Solving least squares with rank deficiency.
## Key properties
- Singular values are \(\sqrt{\lambda_i(A^T A)}\)
- Best rank-\(k\) approximation via truncation (Eckart-Young)
- Works for non-square and non-symmetric matrices

## Common gotchas
- SVD is not unique: signs and subspaces can flip when singular values repeat.
- \(U\) and \(V\) are orthonormal, not necessarily square if using thin SVD.



## Example
For \(A=egin{bmatrix}1&0\0&0
\end{bmatrix}\),
\(U=I,\;\Sigma=\operatorname{diag}(1,0),\;V=I\).
## See also
- [Eigendecomposition](../linear-algebra/eigendecomposition.md)
