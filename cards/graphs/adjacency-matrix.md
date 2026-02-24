---
id: graph.adjacency-matrix
title: Adjacency Matrix
tags: [graph-theory, linear-algebra]
related: [graph.degree-matrix, graph.laplacian]
prereqs: [graph.graphs]
---

# Adjacency Matrix

<div class="formula" markdown="1">
## Formula
\[
A_{ij} = \begin{cases}1,& (i,j)\in E\\0,&\text{otherwise}\end{cases}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\): adjacency matrix
- \(E\): edge set

</div>
## What it means
Matrix representation of graph connections between nodes.



## What it's used for
- Representing graphs for linear algebra operations (e.g., Laplacian, spectral methods).
- Fast edge lookups in graph algorithms.
## Key properties
- For undirected graphs, \(A\) is symmetric
- For weighted graphs, entries are edge weights

## Common gotchas
- Self-loops appear on the diagonal.
- Directed graphs yield non-symmetric \(A\).



## Example
For an undirected path 1-2-3,
\[
A=
egin{bmatrix}0&1&0\
1&0&1\
0&1&0
\end{bmatrix}
\].
## See also
- [Degree Matrix](../graphs/degree-matrix.md)
