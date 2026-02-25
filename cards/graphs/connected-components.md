---
id: graph.connected-components
title: Connected Components
tags: [graphs, algorithms, connectivity]
related: [graph.bfs, graph.dfs]
prereqs: [graph.graph-algorithms]
---

# Connected Components

<div class="formula" markdown="1">
## Formula
\[
u \sim v \iff \text{there exists a path between } u \text{ and } v
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- Undirected graph \(G=(V,E)\)
- Component: maximal set of mutually reachable nodes

</div>
## What it means
Connected components partition an undirected graph into isolated subgraphs.

## What it's used for
- Identifying disconnected regions.
- Preprocessing before graph algorithms and clustering.

## Key properties
- Can be found with repeated BFS/DFS.
- Runtime \(O(|V|+|E|)\).

## Common gotchas
- For directed graphs, use strongly/weakly connected components instead.
- Isolated vertices each form their own component.

## Example
A graph with two disconnected triangles has two connected components.

## How to Compute (Pseudocode)
```text
Input: undirected graph G=(V,E)
Output: list of connected components

for each vertex v in V:
  visited[v] <- false
components <- empty list

for each vertex s in V:
  if not visited[s]:
    component <- BFS_or_DFS_from(s) visiting only unvisited nodes
    mark all nodes in component as visited
    append component to components

return components
```

## Complexity
- Time: \(O(|V|+|E|)\) using BFS/DFS over adjacency lists
- Space: \(O(|V|)\) additional space for visited state and traversal queue/stack (excluding graph storage)
- Assumptions: Undirected graph; each vertex/edge is explored at most once across all traversals

## See also
- [Breadth-First Search (BFS)](../graphs/bfs.md)
- [Depth-First Search (DFS)](../graphs/dfs.md)
