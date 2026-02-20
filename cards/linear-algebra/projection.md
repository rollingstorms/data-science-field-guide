---
id: linalg.projection
title: Orthogonal Projection
tags: [linear-algebra]
related: [linalg.orthonormal-basis, linalg.least-squares]
prereqs: [linalg.orthonormal-basis]
---

# Orthogonal Projection

## Formula
\[
\operatorname{proj}_U(x) = Q Q^T x
\]

## Parameters
- \(Q\): matrix with orthonormal columns spanning \(U\)
- \(x\): vector to project

## What it means
Closest vector to \(x\) that lies in subspace \(U\).

## Key properties
- Idempotent: \(P^2=P\)
- Symmetric: \(P^T=P\)

## Common gotchas
- Requires an orthonormal basis; otherwise use \(Q(Q^T Q)^{-1}Q^T\).
- Projection is not an invertible operation unless \(U\) is full space.

## See also
- [Least Squares](../linear-algebra/least-squares.md)
