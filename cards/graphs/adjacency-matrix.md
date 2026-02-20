---
id: graph.adjacency-matrix
title: Adjacency Matrix
tags: [graph-theory, linear-algebra]
related: [graph.degree-matrix, graph.laplacian]
prereqs: [graph.graphs]
---

# Adjacency Matrix

## Formula
\[
A_{ij} = \begin{cases}1,& (i,j)\in E\\0,&\text{otherwise}\end{cases}
\]

## Parameters
- \(A\): adjacency matrix
- \(E\): edge set

## What it means
Matrix representation of graph connections between nodes.

## Key properties
- For undirected graphs, \(A\) is symmetric
- For weighted graphs, entries are edge weights

## Common gotchas
- Self-loops appear on the diagonal.
- Directed graphs yield non-symmetric \(A\).

## See also
- [Degree Matrix](../graphs/degree-matrix.md)
