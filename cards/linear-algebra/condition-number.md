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
## See also
- [Vector Norms](../linear-algebra/norms.md)
