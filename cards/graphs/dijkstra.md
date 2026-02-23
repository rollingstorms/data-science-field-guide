---
id: graph.dijkstra
title: Dijkstra's Algorithm
tags: [graphs, algorithms, shortest-path]
related: [graph.shortest-path, graph.bellman-ford]
prereqs: [graph.graph-algorithms]
---

# Dijkstra's Algorithm

<div class="formula" markdown="1">
## Formula
\[
d(v) = \min_{(u,v)\in E}\big(d(u)+w(u,v)\big)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(d(v)\): current best known distance to node \(v\)
- \(w(u,v)\): edge weight
- Priority queue over tentative distances

</div>
## What it means
Dijkstra computes shortest paths from one source in a graph with nonnegative edge weights.

## What it's used for
- Routing and pathfinding.
- Weighted shortest-path queries.

## Key properties
- Greedy algorithm with priority queue implementation.
- Typical runtime \(O((|V|+|E|)\log|V|)\).

## Common gotchas
- Fails with negative edge weights.
- Outdated priority-queue entries must be handled correctly.

## Example
Road networks with nonnegative distances/times are a standard Dijkstra use case.

## See also
- [Shortest Path (Overview)](../graphs/shortest-path.md)
- [Bellman-Ford Algorithm](../graphs/bellman-ford.md)
