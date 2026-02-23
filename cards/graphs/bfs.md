---
id: graph.bfs
title: Breadth-First Search (BFS)
tags: [graphs, algorithms, traversal]
related: [graph.dfs, graph.shortest-path]
prereqs: [graph.graph-algorithms]
---

# Breadth-First Search (BFS)

<div class="formula" markdown="1">
## Formula
\[
\text{Explore nodes in increasing distance (number of edges) from a source}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- Source node \(s\)
- Queue data structure for frontier expansion

</div>
## What it means
BFS traverses a graph level by level from a starting node.

## What it's used for
- Reachability and connectedness checks.
- Shortest paths in unweighted graphs.

## Key properties
- Finds minimum-edge-count paths in unweighted graphs.
- Runs in \(O(|V|+|E|)\).

## Common gotchas
- Mark nodes visited when enqueuing (not dequeuing) to avoid duplicates.
- For weighted graphs, BFS is not enough.

## Example
Starting from node \(s\), BFS visits all neighbors at distance 1 before any node at distance 2.

## See also
- [Depth-First Search (DFS)](../graphs/dfs.md)
- [Shortest Path (Overview)](../graphs/shortest-path.md)
