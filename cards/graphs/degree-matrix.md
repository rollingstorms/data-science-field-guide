---
id: graph.degree-matrix
title: Degree Matrix
tags: [graph-theory, linear-algebra]
related: [graph.adjacency-matrix, graph.laplacian]
prereqs: [graph.adjacency-matrix]
---

# Degree Matrix

## Formula
\[
D = \operatorname{diag}(d_1,\ldots,d_n),\quad d_i = \sum_j A_{ij}
\]

## Parameters
- \(A\): adjacency matrix
- \(d_i\): degree of node \(i\)

## What it means
Diagonal matrix collecting node degrees.

## Key properties
- For undirected graphs, degrees are sums of incident weights
- Used to form graph Laplacians

## Common gotchas
- For directed graphs, choose in-degree or out-degree consistently.
- Isolated nodes have zero diagonal entries.

## See also
- [Adjacency Matrix](../graphs/adjacency-matrix.md)
