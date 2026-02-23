---
id: graph.shortest-path
title: Shortest Path (Overview)
tags: [graphs, algorithms, shortest-path]
related: [graph.bfs, graph.dijkstra, graph.bellman-ford]
prereqs: [graph.graph-algorithms]
---

# Shortest Path (Overview)

<div class="formula" markdown="1">
## Formula
\[
\operatorname{dist}(s,v)=\min_{p:s\to v}\sum_{e\in p} w(e)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(s\): source node
- \(v\): target node
- \(p\): path from \(s\) to \(v\)
- \(w(e)\): edge weight (may be 1 in unweighted graphs)

</div>
## What it means
Shortest path algorithms find minimum-cost paths between nodes under a chosen edge cost.

## What it's used for
- Routing, navigation, and network optimization.
- Dependency/cost path analysis in graphs.

## Key properties
- BFS solves unweighted shortest paths.
- Dijkstra solves nonnegative weighted shortest paths.
- Bellman-Ford handles negative weights (without negative cycles reachable from source).

## Common gotchas
- "Shortest" depends on the chosen weight definition.
- Negative cycles make shortest paths undefined (can decrease without bound).

## Example
Use BFS for hop-count shortest path in social graphs, and Dijkstra for road-distance shortest path.

## See also
- [Breadth-First Search (BFS)](../graphs/bfs.md)
- [Dijkstra's Algorithm](../graphs/dijkstra.md)
