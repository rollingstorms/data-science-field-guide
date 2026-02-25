---
id: linalg.positive-definite
title: Positive Definite Matrix
tags: [linear-algebra, optimization]
related: [linalg.cholesky, calc.hessian]
prereqs: []
---

# Positive Definite Matrix

<div class="formula" markdown="1">
## Formula
\[
A \succ 0 \iff x^\top A x > 0 \quad \forall x\ne 0
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\): symmetric matrix (in the usual real-valued definition)
- \(x\): nonzero vector

</div>
## What it means
A positive definite matrix defines a strictly positive quadratic form.

## What it's used for
- Convex quadratic optimization.
- Covariance/kernel matrices and Cholesky factorization.

## Key properties
- Symmetric positive definite matrices have positive eigenvalues.
- Admit Cholesky factorization \(A=LL^\top\).

## Common gotchas
- Positive entries do not imply positive definiteness.
- Must distinguish positive semidefinite vs definite.

## Example
The identity matrix \(I\) is positive definite because \(x^\top I x=\|x\|^2>0\).

## How to Compute (Pseudocode)
```text
Input: symmetric matrix A
Output: positive-definite check (true/false)

choose a test method
  examples: try Cholesky factorization, or check all eigenvalues > 0
if the test succeeds:
  return true
else:
  return false
```

## Complexity
- Time: Depends on the test method (dense Cholesky or eigendecomposition methods are typically cubic in matrix size)
- Space: Depends on matrix storage and factorization/eigensolver workspaces
- Assumptions: Symmetric real-matrix setting; floating-point tests use tolerances for near-zero eigenvalues/pivots

## See also
- [Cholesky Decomposition](../linear-algebra/cholesky.md)
- [Hessian](../calculus/hessian.md)
