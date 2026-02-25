---
id: graph.edmonds-karp
title: Edmonds-Karp Algorithm
tags: [graphs, algorithms, network-flow]
related: [graph.ford-fulkerson, graph.bfs, graph.dinic]
prereqs: [graph.ford-fulkerson, graph.bfs]
---

# Edmonds-Karp Algorithm

<div class="formula" markdown="1">
## Formula
\[
\text{Each augmentation uses a BFS shortest path (by edge count) in } G_f
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(G_f\): residual graph
- BFS: used to find shortest augmenting path in hops
- \(f\): current flow

</div>
## What it means
Edmonds-Karp is the Ford-Fulkerson method with a specific path rule: always augment along a shortest residual path in number of edges.

## What it's used for
- Polynomial-time max-flow implementation with simple logic.
- Teaching the effect of path-selection strategy in Ford-Fulkerson.

## Key properties
- Runs in \(O(|V||E|^2)\).
- Uses BFS on the residual graph at each augmentation.
- Guarantees termination and polynomial runtime for finite graphs.

## Common gotchas
- "Shortest" means fewest edges, not minimum capacity loss or weighted distance.
- Can be much slower than Dinic or push-relabel on large dense networks.
- BFS must ignore zero-residual-capacity edges.

## Example
In a small capacity network, repeatedly running BFS on residual edges yields a predictable and easy-to-debug max-flow procedure.

## How to Compute (Pseudocode)
```text
Input: flow network G with capacities c, source s, sink t
Output: maximum flow f

initialize flow f(e) <- 0 for all edges e
build residual graph G_f

while BFS finds an s-to-t path P in G_f using only positive-residual edges:
  Delta <- minimum residual capacity on P
  augment flow by Delta along P
  update residual capacities (forward and reverse edges)

return f
```

## Complexity
- Time: \(O(|V||E|^2)\)
- Space: \(O(|V|+|E|)\) for residual graph, BFS state, and flow values
- Assumptions: Adjacency-list residual graph; BFS finds shortest augmenting path by edge count each iteration

## See also
- [Ford-Fulkerson Method](../graphs/ford-fulkerson.md)
- [Breadth-First Search (BFS)](../graphs/bfs.md)
- [Dinic's Algorithm](../graphs/dinic.md)
