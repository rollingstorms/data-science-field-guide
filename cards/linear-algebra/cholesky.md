---
id: linalg.cholesky
title: Cholesky Decomposition
tags: [linear-algebra, matrix-decomposition]
related: [linalg.qr]
prereqs: [linalg.symmetric-positive-definite]
---

# Cholesky Decomposition

<div class="formula" markdown="1">
## Formula
\[
A = L L^T
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\): symmetric positive definite matrix
- \(L\): lower triangular with positive diagonal

</div>
## What it means
Efficient factorization for SPD matrices.



## What it's used for
- Solving SPD linear systems efficiently.
- Sampling from multivariate Gaussians.
## Key properties
- Unique for SPD \(A\)
- About half the cost of LU for SPD matrices

## Common gotchas
- Fails if \(A\) is not positive definite.
- Numerical issues can arise if \(A\) is ill-conditioned.



## Example
For \(A=egin{bmatrix}4&2\2&3
\end{bmatrix}\),
\(L=egin{bmatrix}2&0\1&\sqrt{2}
\end{bmatrix}\) since \(LL^T=A\).
## See also
- [QR Decomposition](../linear-algebra/qr.md)
