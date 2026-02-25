---
id: graph.dinic
title: Dinic's Algorithm
tags: [graphs, algorithms, network-flow]
related: [graph.maximum-flow, graph.edmonds-karp, graph.residual-graph]
prereqs: [graph.maximum-flow, graph.residual-graph, graph.bfs]
---

# Dinic's Algorithm

<div class="formula" markdown="1">
## Formula
\[
\text{Repeat: build level graph via BFS, then send a blocking flow}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- Level graph: residual edges that advance one BFS layer
- Blocking flow: flow that saturates every \(s\)-\(t\) path in the level graph
- \(G_f\): residual graph

</div>
## What it means
Dinic accelerates max-flow by batching augmentations within layered residual graphs instead of using only one augmenting path per BFS.

## What it's used for
- Faster max-flow computation in many practical graph problems.
- Competitive programming and algorithmic graph toolkits.

## Key properties
- Uses alternating BFS (levels) and DFS-style blocking-flow searches.
- Improves over Edmonds-Karp in many settings.
- Classical runtime bound is \(O(|V|^2|E|)\) in general networks.

## Common gotchas
- Correct implementation needs current-edge pointers to avoid repeated scans.
- "Blocking flow" is not necessarily a maximum flow in the level graph.
- Residual updates must maintain reverse edges consistently.

## Example
After BFS assigns levels, DFS pushes flow only along level-respecting edges until all \(s\)-\(t\) paths in that level graph are blocked.

## How to Compute (Pseudocode)
```text
Input: flow network G with capacities c, source s, sink t
Output: maximum flow f

initialize flow f(e) <- 0 for all edges e
build residual graph G_f

while BFS builds levels from s to t in G_f:
  reset current-edge pointers for all vertices
  while DFS sends positive flow through level-respecting paths:
    push flow and update residual edges

return f
```

## Complexity
- Time: \(O(|V|^2|E|)\) in general networks (classical bound)
- Space: \(O(|V|+|E|)\) for residual graph, level array, and DFS/BFS metadata
- Assumptions: Adjacency-list residual graph with reverse edges and current-edge pointers

## See also
- [Maximum Flow](../graphs/maximum-flow.md)
- [Edmonds-Karp Algorithm](../graphs/edmonds-karp.md)
- [Residual Graph](../graphs/residual-graph.md)
