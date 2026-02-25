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
## How to Compute (Pseudocode)
```text
Input: graph G=(V,E), node i
Output: local clustering coefficient C_i

N_i <- neighbors of node i
k_i <- size(N_i)
if k_i < 2:
  return 0

e_i <- number of edges among nodes in N_i
return (2 * e_i) / (k_i * (k_i - 1))
```

## Complexity
- Time: Depends on how neighbor-neighbor edge checks are implemented; a common local computation is \(O(k_i^2)\)
- Space: \(O(k_i)\) to store the neighbor set (or \(O(1)\) extra if already available in a data structure)
- Assumptions: Simple undirected graph and the local coefficient formula shown; global averages add a sum over nodes

## See also
- [Adjacency Matrix](../graphs/adjacency-matrix.md)
