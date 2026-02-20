---
id: linalg.orthonormal-basis
title: Orthonormal Basis
tags: [linear-algebra]
related: [linalg.projection]
prereqs: [linalg.inner-product]
---

# Orthonormal Basis

## Formula
\[
q_i^T q_j = \delta_{ij},\quad i,j=1,\ldots,n
\]

## Parameters
- \(\{q_i\}\): basis vectors
- \(\delta_{ij}\): Kronecker delta

## What it means
A basis with unit-length, mutually orthogonal vectors.

## Key properties
- Matrix \(Q=[q_1\;\cdots\;q_n]\) satisfies \(Q^T Q = I\)
- Coordinates are obtained by dot products with basis vectors

## Common gotchas
- Orthonormality depends on the chosen inner product.
- Numerical orthogonality can degrade with floating point.

## See also
- [Projection](../linear-algebra/projection.md)
