---
id: linalg.projection
title: Orthogonal Projection
tags: [linear-algebra]
related: [linalg.orthonormal-basis, linalg.least-squares]
prereqs: [linalg.orthonormal-basis]
---

# Orthogonal Projection

<div class="formula" markdown="1">
## Formula
\[
\operatorname{proj}_U(x) = Q Q^T x
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(Q\): matrix with orthonormal columns spanning \(U\)
- \(x\): vector to project

</div>
## What it means
Closest vector to \(x\) that lies in subspace \(U\).



## What it's used for
- Finding the closest point in a subspace.
- Deriving least squares solutions.
## Key properties
- Idempotent: \(P^2=P\)
- Symmetric: \(P^T=P\)

## Common gotchas
- Requires an orthonormal basis; otherwise use \(Q(Q^T Q)^{-1}Q^T\).
- Projection is not an invertible operation unless \(U\) is full space.



## Example
Project \(v=(2,1)\) onto the x-axis: \(\mathrm{proj}(v)=(2,0)\).
## See also
- [Least Squares](../linear-algebra/least-squares.md)
