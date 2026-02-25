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
## How to Compute (Pseudocode)
```text
Input: orthonormal basis matrix Q (n x r), vector x in R^n
Output: projection p of x onto span(Q)

coeffs <- Q^T x
p <- Q coeffs
return p
```

## Complexity
- Time: \(O(nr)\) for dense matrix-vector multiplies with \(Q \in \mathbb{R}^{n \times r}\)
- Space: \(O(n + r)\) for the projected vector and coefficient vector
- Assumptions: Q has orthonormal columns; dense computation of \(Q^T x\) and \(Q\,\mathrm{coeffs}\)

## See also
- [Least Squares](../linear-algebra/least-squares.md)
