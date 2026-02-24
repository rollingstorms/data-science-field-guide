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
## See also
- [Graph Laplacian](../graphs/laplacian.md)
