---
id: linalg.trace
title: Trace
tags: [linear-algebra]
related: [linalg.determinant, linalg.eigendecomposition]
prereqs: []
---

# Trace

<div class="formula" markdown="1">
## Formula
\[
\operatorname{tr}(A)=\sum_i A_{ii}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\): square matrix
- \(A_{ii}\): diagonal entries

</div>
## What it means
The trace is the sum of diagonal entries of a square matrix.

## What it's used for
- Matrix identities and proofs.
- Statistics/ML expressions (quadratic forms, covariance identities).

## Key properties
- Linear: \(\operatorname{tr}(A+B)=\operatorname{tr}(A)+\operatorname{tr}(B)\).
- Cyclic: \(\operatorname{tr}(AB)=\operatorname{tr}(BA)\) when products are defined.

## Common gotchas
- Cyclic property does not mean arbitrary reordering is valid.
- Trace is defined for square matrices.

## Example
If \(A=\begin{bmatrix}1&2\\3&4\end{bmatrix}\), then \(\operatorname{tr}(A)=5\).

## How to Compute (Pseudocode)
```text
Input: square matrix A (n x n)
Output: trace(A)

s <- 0
for i from 1 to n:
  s <- s + A[i,i]
return s
```

## Complexity
- Time: \(O(n)\) for an \(n\times n\) matrix when diagonal entries are directly accessible
- Space: \(O(1)\) extra space
- Assumptions: Square matrix input; matrix-loading/storage cost is excluded

## See also
- [Determinant](../linear-algebra/determinant.md)
- [Eigendecomposition](../linear-algebra/eigendecomposition.md)
