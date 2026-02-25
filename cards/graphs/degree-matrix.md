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
## How to Compute (Pseudocode)
```text
Input: adjacency matrix A (n x n)
Output: degree matrix D (n x n)

initialize D as an n x n zero matrix
for i from 1 to n:
  d_i <- sum of row i of A   # use column sum instead if using in-degree convention
  D[i,i] <- d_i

return D
```

## Complexity
- Time: \(O(n^2)\) from summing rows of an \(n\times n\) adjacency matrix
- Space: \(O(n^2)\) for the degree matrix (or \(O(n)\) for just the degree vector)
- Assumptions: Matrix-based graph representation; directed graphs require a consistent in-degree vs out-degree convention

## See also
- [Adjacency Matrix](../graphs/adjacency-matrix.md)
