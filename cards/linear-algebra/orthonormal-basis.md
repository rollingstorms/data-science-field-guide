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
## How to Compute (Pseudocode)
```text
Input: linearly independent vectors v_1, ..., v_k
Output: orthonormal basis q_1, ..., q_k for the same span

apply Gram-Schmidt (or QR factorization) to the vectors
normalize each resulting basis vector to unit norm
return q_1, ..., q_k
```

## Complexity
- Time: Depends on the orthonormalization method; dense Gram-Schmidt/QR workflows are polynomial in vector dimension and number of vectors
- Space: Depends on storing the input vectors and orthonormal basis (and any factorization workspace)
- Assumptions: Numerical stability is method-dependent (Householder QR is usually preferred over classical Gram-Schmidt)

## See also
- [Projection](../linear-algebra/projection.md)
