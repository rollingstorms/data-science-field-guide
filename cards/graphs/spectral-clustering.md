---
id: graph.spectral-clustering
title: Spectral Clustering
tags: [graph-theory, clustering]
related: [graph.laplacian]
prereqs: [graph.laplacian]
---

# Spectral Clustering

<div class="formula" markdown="1">
## Formula
\[
L_{\mathrm{sym}} = I - D^{-1/2} A D^{-1/2}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\): adjacency matrix
- \(D\): degree matrix
- \(L_{\mathrm{sym}}\): normalized Laplacian

</div>
## What it means
Clusters nodes using eigenvectors of the graph Laplacian.



## What it's used for
- Clustering graph nodes using Laplacian eigenvectors.
- Segmenting data when a similarity graph is available.
## Key properties
- Use \(k\) smallest eigenvectors, then run k-means
- Relates to normalized cut objectives

## Common gotchas
- Choice of similarity graph and \(k\) strongly affects results.
- Eigenvectors must be normalized before k-means.



## Example
If the graph is two disconnected pairs, the 2 smallest eigenvectors
separate the pairs into two clusters.
## How to Compute (Pseudocode)
```text
Input: similarity graph (or similarity matrix), number of clusters k
Output: cluster assignments

build adjacency/similarity matrix A and degree matrix D
construct a graph Laplacian (for example, normalized Laplacian)
compute the k eigenvectors associated with the smallest relevant eigenvalues
form an embedding from those eigenvectors (often row-normalized)
run k-means on the embedding rows
return k-means cluster labels
```

## Complexity
- Time: Dominated by eigendecomposition/eigensolver cost plus k-means on the spectral embedding (dense full eigendecomposition can be \(O(n^3)\); sparse/partial methods can be much cheaper)
- Space: Often dominated by graph/similarity storage and eigenvector embeddings (dense \(O(n^2)\), sparse representations lower)
- Assumptions: \(n\) nodes/points; complexity depends strongly on how the similarity graph is built and whether dense or sparse spectral solvers are used

## See also
- [Graph Laplacian](../graphs/laplacian.md)
