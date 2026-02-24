---
id: graph.degree-matrix
title: Degree Matrix
tags: [graph-theory, linear-algebra]
related: [graph.adjacency-matrix, graph.laplacian]
prereqs: [graph.adjacency-matrix]
---

# Degree Matrix

<div class="formula" markdown="1">
## Formula
\[
D = \operatorname{diag}(d_1,\ldots,d_n),\quad d_i = \sum_j A_{ij}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A\): adjacency matrix
- \(d_i\): degree of node \(i\)

</div>
## What it means
Diagonal matrix collecting node degrees.



## What it's used for
- Building the Laplacian \(L=D-A\) for spectral methods.
- Normalizing adjacency matrices.
## Key properties
- For undirected graphs, degrees are sums of incident weights
- Used to form graph Laplacians

## Common gotchas
- For directed graphs, choose in-degree or out-degree consistently.
- Isolated nodes have zero diagonal entries.



## Example
If degrees are \([2,1,1]\), then
\(D=\operatorname{diag}(2,1,1)\).
## See also
- [Adjacency Matrix](../graphs/adjacency-matrix.md)
