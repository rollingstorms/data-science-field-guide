---
id: linalg.nuclear-norm
title: Nuclear Norm (Trace Norm)
tags: [linear-algebra, optimization]
related: [linalg.svd, linalg.matrix-rank, linalg.trace]
prereqs: [linalg.svd]
---

# Nuclear Norm (Trace Norm)

<div class="formula" markdown="1">
## Formula
\[
\|A\|_* = \sum_{i=1}^{\min(m,n)} \sigma_i(A)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\in\mathbb{R}^{m\times n}\): matrix
- \(\sigma_i(A)\): singular values of \(A\) (nonnegative)

</div>
## What it means
The nuclear norm measures matrix size by summing its singular values.

## What it's used for
- Convex surrogate for matrix rank in optimization.
- Low-rank matrix completion and denoising.

## Key properties
- \(\|A\|_* = \operatorname{tr}(\Sigma)\) when \(A = U\Sigma V^T\) (SVD).
- Dual norm of the spectral norm (\(\|\cdot\|_2\) for matrices).
- Convex, unlike rank.

## Common gotchas
- Do not confuse with Frobenius norm (\(\sqrt{\sum_i \sigma_i^2}\)).
- “Trace norm” equals nuclear norm even for non-square matrices, but it is not generally \(\operatorname{tr}(A)\).

## Example
If \(A\) has singular values \(3,1,0\), then \(\|A\|_* = 4\).

## How to Compute (Pseudocode)
```text
Input: matrix A
Output: nuclear norm ||A||_*

compute singular values sigma_i of A (for example, via SVD)
return sum of singular values
```

## Complexity
- Time: Dominated by singular-value computation (dense SVD/eigensolver workflow)
- Space: Depends on whether full SVD factors or only singular values are computed
- Assumptions: Exact computation shown; large-scale applications often use partial/approximate spectral methods

## See also
- [Singular Value Decomposition (SVD)](../linear-algebra/svd.md)
- [Matrix Rank](../linear-algebra/matrix-rank.md)
- [Trace](../linear-algebra/trace.md)
