---
id: linalg.norms
title: Vector Norms
tags: [linear-algebra]
related: [linalg.dot-product]
prereqs: [linalg.vectors]
---

# Vector Norms

<div class="formula" markdown="1">
## Formula
\[
\|x\|_p = \left(\sum_i |x_i|^p\right)^{1/p}\quad (p\ge 1),\qquad \|x\|_\infty = \max_i |x_i|
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x\): vector
- \(p\): norm order

</div>
## What it means
Measures vector size with different emphasis on components.



## What it's used for
- Measuring vector/matrix size.
- Regularization (L1/L2) and stability.
## Key properties
- \(\|x\|_2\) is Euclidean length
- Norms are homogeneous and satisfy triangle inequality

## Common gotchas
- \(\|x\|_0\) is not a norm (counts nonzeros).
- Different norms can change optimization geometry.



## Example
For \(x=(3,4)\), \(\|x\|_2=5\), \(\|x\|_1=7\), \(\|x\|_\infty=4\).
## See also
- [Dot Product](../linear-algebra/dot-product.md)
