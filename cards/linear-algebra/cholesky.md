---
id: linalg.cholesky
title: Cholesky Decomposition
tags: [linear-algebra, matrix-decomposition]
related: [linalg.qr]
prereqs: [linalg.symmetric-positive-definite]
---

# Cholesky Decomposition

## Formula
\[
A = L L^T
\]

## Parameters
- \(A\): symmetric positive definite matrix
- \(L\): lower triangular with positive diagonal

## What it means
Efficient factorization for SPD matrices.

## Key properties
- Unique for SPD \(A\)
- About half the cost of LU for SPD matrices

## Common gotchas
- Fails if \(A\) is not positive definite.
- Numerical issues can arise if \(A\) is ill-conditioned.

## See also
- [QR Decomposition](../linear-algebra/qr.md)
