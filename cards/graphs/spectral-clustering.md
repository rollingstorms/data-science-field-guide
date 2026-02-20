---
id: graph.spectral-clustering
title: Spectral Clustering
tags: [graph-theory, clustering]
related: [graph.laplacian]
prereqs: [graph.laplacian]
---

# Spectral Clustering

## Formula
\[
L_{\mathrm{sym}} = I - D^{-1/2} A D^{-1/2}
\]

## Parameters
- \(A\): adjacency matrix
- \(D\): degree matrix
- \(L_{\mathrm{sym}}\): normalized Laplacian

## What it means
Clusters nodes using eigenvectors of the graph Laplacian.

## Key properties
- Use \(k\) smallest eigenvectors, then run k-means
- Relates to normalized cut objectives

## Common gotchas
- Choice of similarity graph and \(k\) strongly affects results.
- Eigenvectors must be normalized before k-means.

## See also
- [Graph Laplacian](../graphs/laplacian.md)
