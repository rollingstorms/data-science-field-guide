---
id: graph.clustering-coefficient
title: Clustering Coefficient
tags: [graph-theory, networks]
related: [graph.graphs]
prereqs: [graph.graphs]
---

# Clustering Coefficient

<div class="formula" markdown="1">
## Formula
\[
C_i = \frac{2 e_i}{k_i(k_i-1)}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(e_i\): edges among neighbors of node \(i\)
- \(k_i\): degree of node \(i\)

</div>
## What it means
Measures how close a node's neighbors are to being a clique.



## What it's used for
- Measuring local transitivity in social/biological networks.
- Comparing how tightly nodes cluster in different graphs.
## Key properties
- \(0 \le C_i \le 1\)
- Global coefficient averages \(C_i\) across nodes

## Common gotchas
- Undefined for \(k_i<2\); typically set to 0.
- Weighted and directed variants have different formulas.



## Example
If a node has degree \(k=3\) and participates in 1 triangle, then
\(C=2T/(k(k-1))=2\cdot1/(3\cdot2)=1/3\).
## See also
- [Adjacency Matrix](../graphs/adjacency-matrix.md)
