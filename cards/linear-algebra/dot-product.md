---
id: linalg.dot-product
title: Dot Product
tags: [linear-algebra]
related: [linalg.norms, linalg.projection]
prereqs: [linalg.vectors]
---

# Dot Product

## Formula
\[
x\cdot y = \sum_{i=1}^n x_i y_i
\]

## Parameters
- \(x,y\in\mathbb{R}^n\): vectors

## What it means
Measures alignment between vectors; equals \(\|x\|\,\|y\|\cos\theta\).

## Key properties
- Bilinear and symmetric
- Defines length: \(\|x\|_2 = \sqrt{x\cdot x}\)

## Common gotchas
- Dot product depends on coordinate system only through the chosen basis.
- In complex spaces, use conjugate transpose (Hermitian inner product).

## See also
- [Vector Norms](../linear-algebra/norms.md)
