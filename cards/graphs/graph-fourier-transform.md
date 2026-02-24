---
id: graph.graph-fourier-transform
title: Graph Fourier Transform
tags: [graph-theory, spectral, signal-processing]
related: [graph.laplacian, graph.spectral-clustering, signal.fourier-transform]
prereqs: [graph.laplacian, la.eigendecomposition]
---

# Graph Fourier Transform

<div class="formula" markdown="1">
## Formula
\[
\hat{x} = U^\top x
\quad\text{and}\quad
x = U\hat{x}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x \in \mathbb{R}^n\): signal on graph nodes
- \(L = U\Lambda U^\top\): eigendecomposition of a (symmetric) graph Laplacian
- \(U\): Laplacian eigenvectors (graph Fourier basis)
- \(\hat{x}\): graph-frequency coefficients

</div>
## What it means
The graph Fourier transform (GFT) expresses a node signal as a combination of Laplacian eigenvectors, which play the role of Fourier modes on a graph.

Low graph frequencies vary smoothly across connected nodes; high graph frequencies change rapidly across edges.

## What it's used for
- Graph signal denoising and smoothing.
- Spectral graph filtering and graph neural network intuition.
- Analyzing smoothness of node features relative to graph structure.

## Key properties
- For undirected graphs, Laplacian eigenvectors form an orthonormal basis.
- Eigenvalues act like graph frequencies (smaller usually means smoother).
- Parseval-style energy preservation holds when \(U\) is orthonormal: \(\|x\|_2^2 = \|\hat{x}\|_2^2\).

## Common gotchas
- The basis depends on the chosen operator (combinatorial vs normalized Laplacian).
- For directed graphs, the Laplacian may be non-symmetric, so the basis may not be orthonormal.
- Sign flips in eigenvectors are arbitrary and do not change the subspace.

## Example
If neighboring nodes have similar values, most energy of \(x\) is concentrated in low-frequency GFT coefficients; a high-frequency noise component appears in larger-eigenvalue modes.

## See also
- [Graph Laplacian](../graphs/laplacian.md)
- [Spectral Clustering](../graphs/spectral-clustering.md)
- [Fourier Transform](../signal-processing/fourier-transform.md)
