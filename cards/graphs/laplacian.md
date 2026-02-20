---
id: graph.laplacian
title: Graph Laplacian
tags: [graph-theory, spectral, linear-algebra]
related: [graph.degree-matrix, graph.adjacency-matrix, graph.normalized-laplacian]
prereqs: [graph.adjacency-matrix]
---

# Graph Laplacian

## Formula
\[
L = D - A
\]

## Parameters
- \(A\): adjacency matrix
- \(D\): degree matrix (diagonal with node degrees)
- \(L\): combinatorial Laplacian

## What it means
Encodes graph connectivity and smoothness of signals on nodes.

## Key properties
- Symmetric positive semidefinite for undirected graphs
- Smallest eigenvalue is 0 with eigenvector \(\mathbf{1}\)
- Multiplicity of eigenvalue 0 equals number of connected components

## Common gotchas
- For directed graphs, \(L\) is not necessarily symmetric.
- Use normalized Laplacian for degree-imbalanced graphs.

## See also
- [Adjacency Matrix](../graphs/adjacency-matrix.md)
