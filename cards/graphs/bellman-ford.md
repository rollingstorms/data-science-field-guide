---
id: graph.bellman-ford
title: Bellman-Ford Algorithm
tags: [graphs, algorithms, shortest-path]
related: [graph.dijkstra, graph.shortest-path]
prereqs: [graph.shortest-path]
---

# Bellman-Ford Algorithm

<div class="formula" markdown="1">
## Formula
\[
d(v) \leftarrow \min\big(d(v),\ d(u)+w(u,v)\big)
\quad \text{for each edge } (u,v)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(d(v)\): distance estimate
- \(w(u,v)\): edge weight
- Repeated edge relaxations over all edges

</div>
## What it means
Bellman-Ford computes single-source shortest paths by repeatedly relaxing edges.

## What it's used for
- Graphs with negative edge weights.
- Detecting negative cycles reachable from the source.

## Key properties
- Performs up to \(|V|-1\) relaxation passes.
- Extra successful relaxation afterward indicates a negative cycle.

## Common gotchas
- Slower than Dijkstra on nonnegative-weight graphs.
- Negative cycles break shortest-path well-definedness.

## Example
If some currency-exchange edge weights (in transformed form) are negative, Bellman-Ford can detect arbitrage cycles.

## How to Compute (Pseudocode)
```text
Input: graph G=(V,E), edge weights w, source s
Output: distances dist[.] and negative-cycle flag

for each vertex v in V:
  dist[v] <- infinity
dist[s] <- 0

for pass from 1 to |V|-1:
  changed <- false
  for each edge (u, v) in E:
    if dist[u] != infinity and dist[u] + w(u,v) < dist[v]:
      dist[v] <- dist[u] + w(u,v)
      changed <- true
  if not changed:
    break

negative_cycle <- false
for each edge (u, v) in E:
  if dist[u] != infinity and dist[u] + w(u,v) < dist[v]:
    negative_cycle <- true
    break

return dist, negative_cycle
```

## Complexity
- Time: \(O(|V||E|)\) in the worst case
- Space: \(O(|V|)\) additional space (excluding graph storage)
- Assumptions: \(|V|\) vertices, \(|E|\) edges, edge-list relaxation; early stopping may improve runtime but not worst-case Big O

## See also
- [Dijkstra's Algorithm](../graphs/dijkstra.md)
- [Shortest Path (Overview)](../graphs/shortest-path.md)
