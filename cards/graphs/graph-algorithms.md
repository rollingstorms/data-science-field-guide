---
id: graph.graph-algorithms
title: Graph Algorithms (Overview)
tags: [graphs, algorithms]
related: [graph.pagerank, graph.spectral-clustering]
prereqs: [graph.adjacency-matrix]
---

# Graph Algorithms (Overview)

<div class="formula" markdown="1">
## Formula
\[
G=(V,E)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(V\): set of vertices (nodes)
- \(E\): set of edges (links)
- Edge weights/directions may be present depending on the problem

</div>
## What it means
Graph algorithms solve problems on networks: traversal, connectivity, shortest paths, ranking, clustering, and flow.

## What it's used for
- Routing and pathfinding.
- Social/network analysis.
- Dependency analysis and scheduling.
- Graph ML preprocessing and feature construction.

## Key properties
- Problem type determines the right algorithm family (traversal vs shortest path vs cut/flow).
- Sparse vs dense graph representations affect time and memory complexity.

## Common gotchas
- Directed and undirected graphs need different assumptions.
- Negative edge weights break some shortest-path algorithms (e.g., Dijkstra).

## Example
Use BFS for shortest paths in an unweighted graph, and Dijkstra's algorithm for nonnegative weighted shortest paths.

## How to Compute (Pseudocode)
```text
Input: graph problem instance and objective (traversal, shortest path, cut/flow, ranking, etc.)
Output: problem-specific result

identify graph type (directed/undirected, weighted/unweighted, sparse/dense)
identify the task category
select an appropriate algorithm family
run the chosen algorithm with a compatible graph representation
return the result and interpret it in the problem domain
```

## Complexity
- Time: Depends on the selected algorithm and graph representation (this overview card is for algorithm selection, not a single runtime)
- Space: Depends on the selected algorithm and representation
- Assumptions: \(|V|\), \(|E|\), edge weights, and data-structure choices determine complexity in downstream cards

## See also
- [PageRank](../graphs/pagerank.md)
- [Spectral Clustering](../graphs/spectral-clustering.md)
