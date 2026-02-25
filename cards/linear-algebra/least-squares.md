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
## How to Compute (Pseudocode)
```text
Input: matrix A (m x n), vector b (m x 1)
Output: least-squares solution x

# Preferred stable route: QR factorization
compute thin QR factorization A = Q R
compute y <- Q^T b
solve upper-triangular system R x = y
return x
```

## Complexity
- Time: \(O(mn^2)\) for dense QR-based least squares when \(m \ge n\)
- Space: \(O(mn)\) for storing dense factors/matrix data (implementation-dependent)
- Assumptions: Dense matrix \(A \in \mathbb{R}^{m\times n}\); complexity shown for the numerically stable QR approach (normal equations have different cost/stability tradeoffs)

## See also
- [Projection](../linear-algebra/projection.md)
