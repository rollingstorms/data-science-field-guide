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

## How to Compute (Pseudocode)
```text
Input: graph G=(V,E), nonnegative edge weights w, source s
Output: shortest-path distances dist[.]

for each vertex v in V:
  dist[v] <- infinity
dist[s] <- 0

push (0, s) into min-priority-queue pq

while pq is not empty:
  (du, u) <- pop-min(pq)
  if du > dist[u]:
    continue  // skip outdated queue entry

  for each edge (u, v) in adj[u]:
    alt <- dist[u] + w(u, v)
    if alt < dist[v]:
      dist[v] <- alt
      push (dist[v], v) into pq

return dist
```

## Complexity
- Time: \(O((|V|+|E|)\log |V|)\) with a binary-heap priority queue
- Space: \(O(|V|+|E|)\) for graph storage plus \(O(|V|)\) distances/queue metadata
- Assumptions: \(|V|\) vertices, \(|E|\) edges, adjacency-list representation

## See also
- [Shortest Path (Overview)](../graphs/shortest-path.md)
- [Bellman-Ford Algorithm](../graphs/bellman-ford.md)
