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

## See also
- [Depth-First Search (DFS)](../graphs/dfs.md)
- [Graph Algorithms (Overview)](../graphs/graph-algorithms.md)
