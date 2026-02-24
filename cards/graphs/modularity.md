---
id: graph.modularity
title: Modularity (Community Quality)
tags: [graphs, community-detection]
related: [graph.louvain, graph.leiden, graph.assortativity]
prereqs: [graph.adjacency-matrix]
---

# Modularity

<div class="formula" markdown="1">
## Formula
\[
Q = \frac{1}{2m}\sum_{i,j}\left(A_{ij} - \frac{k_i k_j}{2m}\right)\,\mathbf{1}[c_i=c_j]
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A_{ij}\): edge weight between \(i\) and \(j\) (0/1 if unweighted)
- \(k_i\): degree (or weighted degree/strength)
- \(m\): number of edges (or total weight / 2)
- \(c_i\): community label

</div>
## What it means
Compares actual within-community edges to the expected count under a degree-preserving “null model”.



## What it's used for
- Evaluating the quality of a community assignment.
- Objective optimized by Louvain/Leiden algorithms.
## Key properties
- Higher \(Q\) suggests stronger community structure
- Often optimized by Louvain/Leiden heuristics

## Common gotchas
- **Resolution limit**: modularity can miss small communities in large graphs
- There are variants with a resolution parameter \(\gamma\):
  \[
  A_{ij} - \gamma\frac{k_i k_j}{2m}
  \]

## Example
Graph with edges (1,2) and (3,4), communities {1,2} and {3,4}:
\(m=2\), all degrees 1, and \(Q=0.5\).
