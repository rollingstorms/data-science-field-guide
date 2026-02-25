---
id: linalg.span
title: Span
tags: [linear-algebra]
related: [linalg.linear-independence, linalg.orthonormal-basis]
prereqs: []
---

# Span

<div class="formula" markdown="1">
## Formula
\[
\operatorname{span}\{v_1,\dots,v_k\}=
\left\{\sum_{i=1}^k c_i v_i : c_i\in\mathbb{R}\right\}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(v_1,\dots,v_k\): vectors
- \(c_i\): scalar coefficients

</div>
## What it means
The span is the set of all linear combinations of a given collection of vectors.

## What it's used for
- Defining subspaces and bases.
- Understanding column spaces and model expressivity.

## Key properties
- Span of finitely many vectors is a subspace.
- A basis is a linearly independent spanning set.

## Common gotchas
- A spanning set can contain redundant vectors.
- Spanning all of \(\mathbb{R}^n\) requires enough independent directions.

## Example
The span of \((1,0)\) and \((0,1)\) is all of \(\mathbb{R}^2\).

## How to Compute (Pseudocode)
```text
Input: vectors v_1, ..., v_k and a target vector x (for membership/representation checks)
Output: whether x is in span{v_i} (and coefficients if so)

form matrix V with columns v_i
solve V c = x (exactly or least-squares / rank check, depending on the task)
if a consistent solution exists:
  return True and coefficients c
else:
  return False
```

## Complexity
- Time: Depends on the chosen linear-system/rank test method (typically dominated by matrix factorization/solve cost)
- Space: Depends on storing the matrix \(V\) and solver workspaces
- Assumptions: Span membership/representation workflow shown; exact cost depends on dimensions and numerical method

## See also
- [Linear Independence](../linear-algebra/linear-independence.md)
- [Orthonormal Basis](../linear-algebra/orthonormal-basis.md)
