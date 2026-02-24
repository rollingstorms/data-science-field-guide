---
id: linalg.orthonormal-basis
title: Orthonormal Basis
tags: [linear-algebra]
related: [linalg.projection]
prereqs: [linalg.inner-product]
---

# Orthonormal Basis

<div class="formula" markdown="1">
## Formula
\[
q_i^T q_j = \delta_{ij},\quad i,j=1,\ldots,n
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\{q_i\}\): basis vectors
- \(\delta_{ij}\): Kronecker delta

</div>
## What it means
A basis with unit-length, mutually orthogonal vectors.



## What it's used for
- Representing vectors without redundancy.
- Simplifying projections and coordinate changes.
## Key properties
- Matrix \(Q=[q_1\;\cdots\;q_n]\) satisfies \(Q^T Q = I\)
- Coordinates are obtained by dot products with basis vectors

## Common gotchas
- Orthonormality depends on the chosen inner product.
- Numerical orthogonality can degrade with floating point.



## Example
In \(\mathbb{R}^2\), the standard basis \((1,0),(0,1)\) is orthonormal;
\((3,4)=3(1,0)+4(0,1)\).
## See also
- [Projection](../linear-algebra/projection.md)
