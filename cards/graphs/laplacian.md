---
id: graph.laplacian
title: Graph Laplacian
tags: [graph-theory, spectral, linear-algebra]
related: [graph.degree-matrix, graph.adjacency-matrix, graph.normalized-laplacian]
prereqs: [graph.adjacency-matrix]
---

# Graph Laplacian

<div class="formula" markdown="1">
## Formula
\[
L = D - A
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\): adjacency matrix
- \(D\): degree matrix (diagonal with node degrees)
- \(L\): combinatorial Laplacian

</div>
## What it means
Encodes graph connectivity and smoothness of signals on nodes.



## What it's used for
- Spectral clustering and graph partitioning.
- Analyzing connectivity and diffusion on graphs.
## Key properties
- Symmetric positive semidefinite for undirected graphs
- Smallest eigenvalue is 0 with eigenvector \(\mathbf{1}\)
- Multiplicity of eigenvalue 0 equals number of connected components

## Common gotchas
- For directed graphs, \(L\) is not necessarily symmetric.
- Use normalized Laplacian for degree-imbalanced graphs.



## Example
For the path 1-2-3 with
\(A=egin{bmatrix}0&1&0\1&0&1\0&1&0
\end{bmatrix}\) and \(D=\operatorname{diag}(1,2,1)\),
\(L=D-A=egin{bmatrix}1&-1&0\-1&2&-1\0&-1&1
\end{bmatrix}\).
## How to Compute (Pseudocode)
```text
Input: adjacency matrix A (n x n)
Output: graph Laplacian L

D <- degree_matrix(A)
L <- D - A
return L
```

## Complexity
- Time: \(O(n^2)\) with dense matrix representation (degree computation plus matrix subtraction)
- Space: \(O(n^2)\) for storing \(A\), \(D\), and/or \(L\)
- Assumptions: Combinatorial Laplacian for an undirected graph; normalized/directed variants use modified formulas

## See also
- [Adjacency Matrix](../graphs/adjacency-matrix.md)
