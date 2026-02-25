---
id: graph.minimum-cut
title: Minimum Cut
tags: [graphs, algorithms, optimization, network-flow]
related: [graph.maximum-flow, graph.max-flow-min-cut-theorem, graph.edge-cut-vs-vertex-cut, graph.global-minimum-cut]
prereqs: [graph.graph-algorithms]
---

# Minimum Cut

<div class="formula" markdown="1">
## Formula
\[
\operatorname{cut}(S,T)=\sum_{u\in S,\ v\in T} c(u,v),\qquad
(S^*,T^*)=\arg\min_{s\in S,\ t\in T}\operatorname{cut}(S,T)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(G=(V,E)\): graph (often directed with capacities)
- \(c(u,v)\): edge capacity/weight
- \(S,T\): partition of vertices with \(S\cup T=V\), \(S\cap T=\varnothing\)

</div>
## What it means
A cut splits the vertices into two groups and measures the total capacity of edges crossing between them. A minimum cut is the split with the smallest crossing capacity (often with source \(s\) and sink \(t\) forced to opposite sides).

## What it's used for
- Identifying bottlenecks in transportation/communication networks.
- Graph partitioning and segmentation formulations.
- Proving upper bounds on feasible flow.

## Key properties
- For \(s\)-\(t\) problems, every feasible flow value is at most every \(s\)-\(t\) cut value.
- The minimum cut value equals the maximum flow value (max-flow min-cut theorem).
- In undirected graphs, a global min cut does not require choosing \(s,t\) in advance.

## Common gotchas
- "Minimum cut" is different from "minimum spanning tree" (separating vs connecting).
- In directed graphs, cut value typically sums edges from \(S\) to \(T\), not both directions.
- A minimum cut may not be unique.

## Example
If all edges from a source side to a sink side sum to capacity 7, then no flow above 7 can pass; if a flow of 7 exists, that cut is minimum.

## How to Compute (Pseudocode)
```text
Input: capacitated graph G, source s, sink t
Output: minimum s-t cut (S, T) and cut value

run a max-flow algorithm to obtain residual graph G_f
S <- vertices reachable from s in G_f using positive-residual edges
T <- V \ S
cut_value <- sum of capacities c(u,v) for edges with u in S and v in T
return (S, T), cut_value
```

## Complexity
- Time: Dominated by the chosen max-flow algorithm, plus \(O(|V|+|E|)\) for the final reachability/cut extraction
- Space: \(O(|V|+|E|)\) for residual graph and reachability state
- Assumptions: This is the \(s\)-\(t\) minimum cut workflow via max-flow min-cut; global min-cut uses different algorithms

## See also
- [Maximum Flow](../graphs/maximum-flow.md)
- [Max-Flow Min-Cut Theorem](../graphs/max-flow-min-cut-theorem.md)
- [Edge Cut vs Vertex Cut](../graphs/edge-cut-vs-vertex-cut.md)
- [Global Minimum Cut](../graphs/global-minimum-cut.md)
