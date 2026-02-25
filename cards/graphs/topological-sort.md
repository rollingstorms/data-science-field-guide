---
id: graph.topological-sort
title: Topological Sort
tags: [graphs, algorithms, dag]
related: [graph.dfs]
prereqs: [graph.graph-algorithms]
---

# Topological Sort

<div class="formula" markdown="1">
## Formula
\[
u \to v \implies u \text{ appears before } v
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- Directed acyclic graph (DAG)
- Ordering of vertices satisfying edge directions

</div>
## What it means
A topological ordering is a linear order of DAG nodes consistent with all directed edges.

## What it's used for
- Scheduling with dependencies.
- Build systems and prerequisite planning.

## Key properties
- Exists iff the directed graph is acyclic.
- Can be found by Kahn's algorithm or DFS finishing order.

## Common gotchas
- Cycles make topological sorting impossible.
- Multiple valid topological orders often exist.

## Example
If course A is a prerequisite for B, a topological order places A before B.

## How to Compute (Pseudocode)
```text
Input: directed graph G=(V,E)
Output: topological order, or failure if cycle exists

for each vertex v in V:
  indegree[v] <- 0
for each edge (u, v) in E:
  indegree[v] <- indegree[v] + 1

enqueue all vertices with indegree 0 into queue q
order <- empty list

while q is not empty:
  u <- dequeue q
  append u to order
  for each neighbor v in adj[u]:
    indegree[v] <- indegree[v] - 1
    if indegree[v] == 0:
      enqueue v into q

if length(order) < |V|:
  return failure  // graph has a cycle
return order
```

## Complexity
- Time: \(O(|V|+|E|)\) with adjacency lists (Kahn's algorithm)
- Space: \(O(|V|)\) additional space for indegrees, queue, and output (excluding graph storage)
- Assumptions: \(|V|\) vertices, \(|E|\) edges

## See also
- [Depth-First Search (DFS)](../graphs/dfs.md)
- [Graph Algorithms (Overview)](../graphs/graph-algorithms.md)
