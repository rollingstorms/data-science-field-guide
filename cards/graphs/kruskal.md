---
id: graph.kruskal
title: Kruskal's Algorithm
tags: [graphs, algorithms, mst]
related: [graph.minimum-spanning-tree, graph.prim]
prereqs: [graph.minimum-spanning-tree]
---

# Kruskal's Algorithm

<div class="formula" markdown="1">
## Formula
\[
\text{Sort edges by weight and add if they do not create a cycle}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- Sorted edge list
- Disjoint-set / union-find structure

</div>
## What it means
Kruskal builds an MST by greedily adding the lightest safe edge.

## What it's used for
- Computing MSTs in sparse graphs.
- Teaching greedy algorithms + union-find.

## Key properties
- Greedy correctness follows from cut property.
- Runtime dominated by sorting edges.

## Common gotchas
- Must skip edges that connect nodes already in the same component.
- Requires union-find (or equivalent) for efficient cycle checks.

## Example
Process edges from smallest to largest, unioning components until \(|V|-1\) edges are chosen.

## How to Compute (Pseudocode)
```text
Input: weighted graph G=(V,E)
Output: MST edges tree

sort edges E by nondecreasing weight
make-set(v) for each vertex v in V

tree <- empty list
for each edge (u, v) in sorted E:
  if find(u) != find(v):
    add edge (u, v) to tree
    union(u, v)
  if size(tree) == |V|-1:
    break

return tree
```

## Complexity
- Time: \(O(|E|\log |E|)\) (sorting dominates; union-find ops are near-linear overall)
- Space: \(O(|V|+|E|)\) including sorted edges and union-find structure
- Assumptions: Union-find with path compression/rank; connected graph for a full MST (otherwise returns a minimum spanning forest)

## See also
- [Minimum Spanning Tree (MST)](../graphs/minimum-spanning-tree.md)
- [Prim's Algorithm](../graphs/prim.md)
