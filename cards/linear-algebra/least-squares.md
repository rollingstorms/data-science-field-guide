---
id: linalg.least-squares
title: Least Squares
tags: [linear-algebra, optimization]
related: [linalg.projection]
prereqs: [linalg.projection]
---

# Least Squares

<div class="formula" markdown="1">
## Formula
\[
x^* = \arg\min_x \|Ax-b\|_2^2,\quad A^T A x = A^T b
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\): design matrix
- \(b\): target vector

</div>
## What it means
Finds the best-fit solution when \(Ax=b\) is overdetermined.



## What it's used for
- Fitting linear models to data.
- Solving overdetermined systems.
## Key properties
- Solution is projection of \(b\) onto \(\operatorname{col}(A)\)
- If \(A\) has full column rank, solution is unique

## Common gotchas
- Normal equations can be numerically unstable; QR/SVD is preferred.
- If \(A\) is rank-deficient, solutions are not unique.



## Example
Minimize \(\|Ax-b\|^2\) with
\(A=egin{bmatrix}1\2
\end{bmatrix}\), \(b=egin{bmatrix}1\2
\end{bmatrix}\) gives \(x=1\).
## See also
- [Projection](../linear-algebra/projection.md)
