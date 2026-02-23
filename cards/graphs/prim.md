---
id: graph.prim
title: Prim's Algorithm
tags: [graphs, algorithms, mst]
related: [graph.minimum-spanning-tree, graph.kruskal]
prereqs: [graph.minimum-spanning-tree]
---

# Prim's Algorithm

<div class="formula" markdown="1">
## Formula
\[
\text{Grow a tree by repeatedly adding the minimum-weight edge crossing the cut}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- Current tree (visited set)
- Priority queue of candidate crossing edges

</div>
## What it means
Prim grows an MST from a seed node by always attaching the cheapest reachable new node.

## What it's used for
- Computing MSTs, especially with adjacency structures.
- Dense-graph and priority-queue based MST implementations.

## Key properties
- Greedy algorithm using cut property.
- Similar spirit to Dijkstra but for MST instead of shortest paths.

## Common gotchas
- Do not confuse path distance with edge weight to tree.
- Must ignore stale priority-queue entries when a better edge appears.

## Example
Starting from node 1, keep adding the cheapest edge that connects the current tree to any outside node.

## See also
- [Minimum Spanning Tree (MST)](../graphs/minimum-spanning-tree.md)
- [Kruskal's Algorithm](../graphs/kruskal.md)
