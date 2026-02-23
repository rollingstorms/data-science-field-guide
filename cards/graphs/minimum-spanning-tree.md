---
id: graph.minimum-spanning-tree
title: Minimum Spanning Tree (MST)
tags: [graphs, algorithms, optimization]
related: [graph.kruskal, graph.prim]
prereqs: [graph.graph-algorithms]
---

# Minimum Spanning Tree (MST)

<div class="formula" markdown="1">
## Formula
\[
T^*=\arg\min_{T \text{ spans } V}\ \sum_{e\in T} w(e)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- Weighted connected undirected graph
- \(T\): spanning tree
- \(w(e)\): edge weight

</div>
## What it means
An MST connects all nodes with no cycles and minimum total edge weight.

## What it's used for
- Network design and clustering heuristics.
- Sparse structure extraction from weighted graphs.

## Key properties
- Has exactly \(|V|-1\) edges.
- Can be found by Kruskal's or Prim's algorithm.

## Common gotchas
- Defined for undirected graphs; directed analogs are different problems.
- If graph is disconnected, the result is a minimum spanning forest.

## Example
For connecting cities with minimum cable length, an MST gives a cheapest cycle-free backbone.

## See also
- [Kruskal's Algorithm](../graphs/kruskal.md)
- [Prim's Algorithm](../graphs/prim.md)
