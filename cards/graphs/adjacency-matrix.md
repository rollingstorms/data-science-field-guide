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
## How to Compute (Pseudocode)
```text
Input: graph G=(V,E) with n labeled vertices
Output: adjacency matrix A of size n x n

initialize A[i][j] <- 0 for all i, j
for each edge (u, v) in E:
  A[u][v] <- weight(u,v) if weighted else 1
  if graph is undirected:
    A[v][u] <- A[u][v]

return A
```

## Complexity
- Time: \(O(n^2 + |E|)\) if explicitly zero-initializing the full matrix; edge insertion alone is \(O(|E|)\)
- Space: \(O(n^2)\) for the matrix
- Assumptions: \(n=|V|\); vertices are indexed to matrix rows/columns

## See also
- [Degree Matrix](../graphs/degree-matrix.md)
