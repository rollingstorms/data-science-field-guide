---
id: linalg.qr
title: QR Decomposition
tags: [linear-algebra, matrix-decomposition]
related: [linalg.least-squares]
prereqs: [linalg.orthonormal-basis]
---

# QR Decomposition

## Formula
\[
A = Q R
\]

## Parameters
- \(A\in\mathbb{R}^{m\times n}\)
- \(Q\in\mathbb{R}^{m\times n}\): orthonormal columns
- \(R\in\mathbb{R}^{n\times n}\): upper triangular

## What it means
Factorizes a matrix into an orthonormal basis and a triangular matrix.

## Key properties
- Used for least squares and numerical stability
- Can be computed via Gram-Schmidt or Householder reflections

## Common gotchas
- "Thin" vs "full" QR shapes differ; be explicit.
- Classical Gram-Schmidt is numerically unstable.

## See also
- [Least Squares](../linear-algebra/least-squares.md)
