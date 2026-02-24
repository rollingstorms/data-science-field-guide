---
id: linalg.dot-product
title: Dot Product
tags: [linear-algebra]
related: [linalg.norms, linalg.projection]
prereqs: [linalg.vectors]
---

# Dot Product

<div class="formula" markdown="1">
## Formula
\[
x\cdot y = \sum_{i=1}^n x_i y_i
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x,y\in\mathbb{R}^n\): vectors

</div>
## What it means
Measures alignment between vectors; equals \(\|x\|\,\|y\|\cos\theta\).



## What it's used for
- Measuring similarity and angles between vectors.
- Projection and least squares derivations.
## Key properties
- Bilinear and symmetric
- Defines length: \(\|x\|_2 = \sqrt{x\cdot x}\)

## Common gotchas
- Dot product depends on coordinate system only through the chosen basis.
- In complex spaces, use conjugate transpose (Hermitian inner product).



## Example
If \(a=(1,2)\) and \(b=(3,4)\), then \(a\cdot b=11\).
## See also
- [Vector Norms](../linear-algebra/norms.md)
