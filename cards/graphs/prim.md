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

## How to Compute (Pseudocode)
```text
Input: connected weighted graph G=(V,E), start node s
Output: MST edges tree

for each vertex v in V:
  key[v] <- infinity
  parent[v] <- null
  in_tree[v] <- false
key[s] <- 0
push (0, s) into min-priority-queue pq

tree <- empty list
while pq is not empty:
  (ku, u) <- pop-min(pq)
  if in_tree[u]:
    continue
  in_tree[u] <- true
  if parent[u] != null:
    add edge (parent[u], u) to tree

  for each edge (u, v) in adj[u]:
    if not in_tree[v] and w(u,v) < key[v]:
      key[v] <- w(u,v)
      parent[v] <- u
      push (key[v], v) into pq

return tree
```

## Complexity
- Time: \(O((|V|+|E|)\log |V|)\) with a binary-heap priority queue
- Space: \(O(|V|+|E|)\) for graph storage plus \(O(|V|)\) metadata/queue keys
- Assumptions: Adjacency-list representation; connected graph for a single MST tree output

## See also
- [Minimum Spanning Tree (MST)](../graphs/minimum-spanning-tree.md)
- [Kruskal's Algorithm](../graphs/kruskal.md)
