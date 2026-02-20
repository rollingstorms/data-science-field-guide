---
id: linalg.norms
title: Vector Norms
tags: [linear-algebra]
related: [linalg.dot-product]
prereqs: [linalg.vectors]
---

# Vector Norms

## Formula
\[
\|x\|_p = \left(\sum_i |x_i|^p\right)^{1/p}\quad (p\ge 1),\qquad \|x\|_\infty = \max_i |x_i|
\]

## Parameters
- \(x\): vector
- \(p\): norm order

## What it means
Measures vector size with different emphasis on components.

## Key properties
- \(\|x\|_2\) is Euclidean length
- Norms are homogeneous and satisfy triangle inequality

## Common gotchas
- \(\|x\|_0\) is not a norm (counts nonzeros).
- Different norms can change optimization geometry.

## See also
- [Dot Product](../linear-algebra/dot-product.md)
