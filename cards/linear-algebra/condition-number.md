---
id: linalg.condition-number
title: Condition Number
tags: [numerical]
related: [linalg.norms]
prereqs: [linalg.norms]
---

# Condition Number

## Formula
\[
\kappa(A) = \|A\|\,\|A^{-1}\|
\]

## Parameters
- \(A\): nonsingular matrix
- \(\|\cdot\|\): matrix norm (often 2-norm)

## What it means
Measures sensitivity of linear systems \(Ax=b\) to perturbations.

## Key properties
- \(\kappa(A)\ge 1\)
- \(\kappa_2(A)=\sigma_{\max}/\sigma_{\min}\)

## Common gotchas
- Large \(\kappa\) implies numerical instability.
- Depends on the chosen norm.

## See also
- [Vector Norms](../linear-algebra/norms.md)
