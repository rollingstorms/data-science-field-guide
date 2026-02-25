---
id: linalg.pca
title: Principal Component Analysis (PCA)
tags: [linear-algebra, dimensionality-reduction]
related: [linalg.svd, linalg.eigendecomposition, graph.spectral-clustering]
prereqs: [linalg.eigenvalues-eigenvectors]
---

# Principal Component Analysis (PCA)

<div class="formula" markdown="1">
## Formula
\[
\Sigma=\frac{1}{n-1}X_c^T X_c
\]

\[
w_1=\arg\max_{\|w\|=1}\; w^T \Sigma w
\]

\[
Z=X_c W_k
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X_c\): centered data matrix (rows are samples)
- \(\Sigma\): sample covariance matrix
- \(w_1\): first principal direction (top eigenvector of \(\Sigma\))
- \(W_k\): matrix of top \(k\) principal directions
- \(Z\): projected \(k\)-dimensional representation

</div>
## What it means
Finds orthogonal directions of maximum variance and projects data onto them.

## What it's used for
- Dimensionality reduction and visualization.
- Denoising and compression.
- Preprocessing before clustering or regression/classification.

## Key properties
- Principal components are orthogonal
- Equivalent to SVD on centered data
- Explained variance comes from eigenvalues of \(\Sigma\)

## Common gotchas
- Features should usually be standardized if scales differ a lot.
- PCA is linear and may miss nonlinear structure.
- Center the data first (and often scale it) before applying PCA.

## Example
Reducing 100-dimensional embeddings to 2D for visualization uses \(Z=X_cW_2\).

## How to Compute (Pseudocode)
```text
Input: data matrix X (n samples x d features), target components k
Output: principal components and projected data

center data: X_c <- X - column_means(X)
compute PCA via SVD or covariance eigendecomposition
select the top k principal directions W_k
project data: Z <- X_c W_k
return W_k, Z
```

## Complexity
- Time: Dominated by SVD/eigendecomposition (dense PCA is typically polynomial and often cubic in the smaller matrix dimension)
- Space: Depends on data storage and whether full covariance or SVD factors are materialized
- Assumptions: Dense PCA workflow shown; randomized/incremental PCA methods have different runtime/memory tradeoffs

## See also
- [Singular Value Decomposition (SVD)](../linear-algebra/svd.md)
- [Eigenvalues & Eigenvectors](../linear-algebra/eigenvalues-eigenvectors.md)
