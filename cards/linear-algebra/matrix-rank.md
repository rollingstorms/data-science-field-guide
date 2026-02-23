---
id: linalg.matrix-rank
title: Matrix Rank
tags: [linear-algebra]
related: [linalg.linear-independence, linalg.pseudoinverse]
prereqs: []
---

# Matrix Rank

<div class="formula" markdown="1">
## Formula
\[
\operatorname{rank}(A)=\dim(\operatorname{col}(A))=\dim(\operatorname{row}(A))
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\): matrix
- \(\operatorname{col}(A)\): column space
- \(\operatorname{row}(A)\): row space

</div>
## What it means
Rank is the number of linearly independent rows/columns of a matrix.

## What it's used for
- Checking solvability and identifiability.
- Diagnosing redundancy and singularity.

## Key properties
- \(\operatorname{rank}(A)\le \min(m,n)\) for \(A\in\mathbb{R}^{m\times n}\).
- Full rank depends on matrix shape and dimension.

## Common gotchas
- Numerical rank depends on tolerance in floating-point computations.
- Tall and wide matrices have different "full rank" meanings.

## Example
If one column is a multiple of another, the matrix rank drops.

## See also
- [Linear Independence](../linear-algebra/linear-independence.md)
- [Pseudo-inverse (Moore-Penrose)](../linear-algebra/pseudoinverse.md)
