---
id: graph.kruskal
title: Kruskal's Algorithm
tags: [graphs, algorithms, mst]
related: [graph.minimum-spanning-tree, graph.prim]
prereqs: [graph.minimum-spanning-tree]
---

# Kruskal's Algorithm

<div class="formula" markdown="1">
## Formula
\[
\text{Sort edges by weight and add if they do not create a cycle}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- Sorted edge list
- Disjoint-set / union-find structure

</div>
## What it means
Kruskal builds an MST by greedily adding the lightest safe edge.

## What it's used for
- Computing MSTs in sparse graphs.
- Teaching greedy algorithms + union-find.

## Key properties
- Greedy correctness follows from cut property.
- Runtime dominated by sorting edges.

## Common gotchas
- Must skip edges that connect nodes already in the same component.
- Requires union-find (or equivalent) for efficient cycle checks.

## Example
Process edges from smallest to largest, unioning components until \(|V|-1\) edges are chosen.

## See also
- [Minimum Spanning Tree (MST)](../graphs/minimum-spanning-tree.md)
- [Prim's Algorithm](../graphs/prim.md)
