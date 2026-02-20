---
id: linalg.least-squares
title: Least Squares
tags: [linear-algebra, optimization]
related: [linalg.projection]
prereqs: [linalg.projection]
---

# Least Squares

## Formula
\[
x^* = \arg\min_x \|Ax-b\|_2^2,\quad A^T A x = A^T b
\]

## Parameters
- \(A\): design matrix
- \(b\): target vector

## What it means
Finds the best-fit solution when \(Ax=b\) is overdetermined.

## Key properties
- Solution is projection of \(b\) onto \(\operatorname{col}(A)\)
- If \(A\) has full column rank, solution is unique

## Common gotchas
- Normal equations can be numerically unstable; QR/SVD is preferred.
- If \(A\) is rank-deficient, solutions are not unique.

## See also
- [Projection](../linear-algebra/projection.md)
