---
id: linalg.condition-number
title: Condition Number
tags: [numerical]
related: [linalg.norms]
prereqs: [linalg.norms]
---

# Condition Number

<div class="formula" markdown="1">
## Formula
\[
\kappa(A) = \|A\|\,\|A^{-1}\|
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\): nonsingular matrix
- \(\|\cdot\|\): matrix norm (often 2-norm)

</div>
## What it means
Measures sensitivity of linear systems \(Ax=b\) to perturbations.



## What it's used for
- Predicting sensitivity of linear solves to noise.
- Comparing numerical stability of matrices.
## Key properties
- \(\kappa(A)\ge 1\)
- \(\kappa_2(A)=\sigma_{\max}/\sigma_{\min}\)

## Common gotchas
- Large \(\kappa\) implies numerical instability.
- Depends on the chosen norm.



## Example
For \(A=I\), \(\kappa(A)=1\). For \(A=\operatorname{diag}(1,0.01)\), \(\kappa=100\).
## How to Compute (Pseudocode)
```text
Input: nonsingular matrix A and chosen norm
Output: condition number kappa(A)

if using 2-norm:
  compute singular values of A
  return sigma_max / sigma_min
else:
  compute ||A|| and ||A^{-1}|| (or estimate them)
  return ||A|| * ||A^{-1}||
```

## Complexity
- Time: Depends on the norm and method; exact 2-norm condition numbers typically use SVD/eigensolver computations, while practical solvers often estimate conditioning more cheaply
- Space: Depends on matrix storage and decomposition/estimation workspaces
- Assumptions: Dense exact computation can be expensive; norm estimators are common in practice for large systems

## See also
- [Vector Norms](../linear-algebra/norms.md)
