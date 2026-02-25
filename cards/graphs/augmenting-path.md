---
id: graph.augmenting-path
title: Augmenting Path
tags: [graphs, algorithms, network-flow]
related: [graph.residual-graph, graph.ford-fulkerson, graph.edmonds-karp]
prereqs: [graph.residual-graph]
---

# Augmenting Path

<div class="formula" markdown="1">
## Formula
\[
\Delta=\min_{(u,v)\in P} c_f(u,v)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(P\): \(s\)-to-\(t\) path in the residual graph
- \(c_f(u,v)\): residual capacity on edge \((u,v)\)
- \(\Delta\): bottleneck residual capacity on \(P\)

</div>
## What it means
An augmenting path is a path from source to sink in the residual graph along which additional flow can be pushed by the bottleneck amount \(\Delta\).

## What it's used for
- Iterative improvement step in Ford-Fulkerson-style max-flow algorithms.
- Constructive proof that flow is not yet maximal when such a path exists.

## Key properties
- Augmenting by \(\Delta\) preserves feasibility.
- If no augmenting path exists, the current flow is maximum.
- Path selection strategy affects runtime substantially.

## Common gotchas
- The path is found in the residual graph, not necessarily the original graph.
- Some path choices can lead to poor performance in Ford-Fulkerson.
- Bottleneck is the minimum residual capacity, not the sum.

## Example
If a residual path has capacities \((5,3,9)\), you can augment by 3 units along that path.

## See also
- [Residual Graph](../graphs/residual-graph.md)
- [Ford-Fulkerson Method](../graphs/ford-fulkerson.md)
- [Edmonds-Karp Algorithm](../graphs/edmonds-karp.md)
