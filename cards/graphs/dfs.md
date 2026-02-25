---
id: graph.dfs
title: Depth-First Search (DFS)
tags: [graphs, algorithms, traversal]
related: [graph.bfs, graph.topological-sort]
prereqs: [graph.graph-algorithms]
---

# Depth-First Search (DFS)

<div class="formula" markdown="1">
## Formula
\[
\text{Explore a path deeply before backtracking}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- Start node(s)
- Stack (explicit or recursion)

</div>

## What it means
DFS traverses by following one branch as far as possible before backtracking.

## What it's used for
- Connectivity and cycle detection.
- Topological sort and strongly connected component algorithms.

## Key properties
- Runs in \(O(|V|+|E|)\).
- Produces discovery/finish times useful for graph analysis.

## Common gotchas
- Recursive DFS can hit recursion limits on large graphs.
- Need visited tracking to avoid infinite loops in cyclic graphs.

## Example
DFS from a node may visit a long chain before returning to explore siblings.

## How to Compute (Pseudocode)
```text
Input: graph G=(V,E), start node s
Output: traversal order

for each vertex v in V:
  visited[v] <- false

procedure DFS(u):
  visited[u] <- true
  visit u
  for each neighbor v in adj[u]:
    if not visited[v]:
      DFS(v)

DFS(s)
```

## Complexity
- Time: \(O(|V|+|E|)\) with adjacency lists
- Space: \(O(|V|)\) additional space for visited plus recursion/stack in the worst case
- Assumptions: \(|V|\) vertices, \(|E|\) edges

## See also
- [Breadth-First Search (BFS)](../graphs/bfs.md)
- [Topological Sort](../graphs/topological-sort.md)
