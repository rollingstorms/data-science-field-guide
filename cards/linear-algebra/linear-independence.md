---
id: linalg.linear-independence
title: Linear Independence
tags: [linear-algebra]
related: [linalg.span, linalg.matrix-rank]
prereqs: []
---

# Linear Independence

<div class="formula" markdown="1">
## Formula
\[
\sum_{i=1}^k c_i v_i = 0 \implies c_1=\cdots=c_k=0
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(v_1,\dots,v_k\): vectors
- \(c_i\): scalar coefficients

</div>
## What it means
Vectors are linearly independent if no nontrivial linear combination of them equals zero.

## What it's used for
- Bases, rank, and dimension arguments.
- Determining redundancy in feature sets or matrix columns.

## Key properties
- Independent vectors contribute new directions.
- In \(\mathbb{R}^n\), more than \(n\) vectors must be dependent.

## Common gotchas
- Pairwise non-parallel vectors are not enough in higher dimensions.
- Numerical near-dependence can be hard to detect exactly.

## Example
\((1,0)\) and \((0,1)\) are independent; \((1,0)\) and \((2,0)\) are dependent.

## How to Compute (Pseudocode)
```text
Input: vectors v_1, ..., v_k
Output: whether the vectors are linearly independent

form matrix V with vectors as columns
compute rank(V) (or row-reduce / QR)
return (rank(V) == k)
```

## Complexity
- Time: Depends on the matrix factorization/rank algorithm (often cubic in the smaller dimension for dense exact/factorization methods)
- Space: Depends on matrix storage and factorization workspace
- Assumptions: Numerical implementations require a tolerance for near-dependence in floating-point arithmetic

## See also
- [Span](../linear-algebra/span.md)
- [Matrix Rank](../linear-algebra/matrix-rank.md)
