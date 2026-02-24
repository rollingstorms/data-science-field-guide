---
id: linalg.qr
title: QR Decomposition
tags: [linear-algebra, matrix-decomposition]
related: [linalg.least-squares]
prereqs: [linalg.orthonormal-basis]
---

# QR Decomposition

<div class="formula" markdown="1">
## Formula
\[
A = Q R
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\in\mathbb{R}^{m\times n}\)
- \(Q\in\mathbb{R}^{m\times n}\): orthonormal columns
- \(R\in\mathbb{R}^{n\times n}\): upper triangular

</div>
## What it means
Factorizes a matrix into an orthonormal basis and a triangular matrix.



## What it's used for
- Stable least squares and orthonormalization.
- Solving \(Ax=b\) without forming \(A^TA\).
## Key properties
- Used for least squares and numerical stability
- Can be computed via Gram-Schmidt or Householder reflections

## Common gotchas
- "Thin" vs "full" QR shapes differ; be explicit.
- Classical Gram-Schmidt is numerically unstable.



## Example
For \(A=I\), one QR factorization is \(Q=I, R=I\).
## See also
- [Least Squares](../linear-algebra/least-squares.md)
