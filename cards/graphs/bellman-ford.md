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

## See also
- [Dijkstra's Algorithm](../graphs/dijkstra.md)
- [Shortest Path (Overview)](../graphs/shortest-path.md)
