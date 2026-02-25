---
id: graph.maximum-flow
title: Maximum Flow
tags: [graphs, algorithms, optimization, network-flow]
related: [graph.flow-network, graph.minimum-cut, graph.ford-fulkerson]
prereqs: [graph.graph-algorithms]
---

# Maximum Flow

<div class="formula" markdown="1">
## Formula
\[
\max \sum_{v} f(s,v)
\quad\text{s.t.}\quad
0\le f(u,v)\le c(u,v),\;
\sum_u f(u,v)=\sum_w f(v,w)\ \ (v\ne s,t)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(f(u,v)\): flow on edge \((u,v)\)
- \(c(u,v)\): capacity of edge \((u,v)\)
- \(s,t\): source and sink

</div>
## What it means
Maximum flow asks for the largest amount of material/data that can be sent from a source to a sink without violating edge capacities and flow conservation.

## What it's used for
- Capacity planning in networks and logistics.
- Matching/assignment reductions in combinatorial optimization.
- Building blocks for cut, circulation, and scheduling problems.

## Key properties
- Feasibility requires capacity constraints and conservation at intermediate nodes.
- Integer capacities admit an integer optimal flow for standard max-flow formulations.
- Solved by Ford-Fulkerson family algorithms and modern variants (e.g., Dinic).

## Common gotchas
- Need a directed network formulation even when the original graph is undirected.
- Backtracking is represented through residual edges, not by directly "undoing" flow in the original graph.
- Max flow and shortest path are different problem families.

## Example
In a pipeline network, max flow gives the highest throughput from a reservoir node to a city node under pipe capacity limits.

## How to Compute (Pseudocode)
```text
Input: flow network G with capacities c, source s, sink t
Output: maximum flow value (and optionally edge flows)

choose a max-flow algorithm (for example Edmonds-Karp or Dinic)
run the algorithm on (G, c, s, t) to obtain flow f
value <- total outgoing flow from s  // equivalently incoming flow to t
return value, f
```

## Complexity
- Time: Depends on the chosen algorithm (for example, Edmonds-Karp: \(O(|V||E|^2)\), Dinic: \(O(|V|^2|E|)\) general bound)
- Space: \(O(|V|+|E|)\) for standard residual-graph implementations
- Assumptions: Complexity is algorithm-dependent; adjacency-list residual graph for the listed bounds

## See also
- [Flow Network](../graphs/flow-network.md)
- [Minimum Cut](../graphs/minimum-cut.md)
- [Ford-Fulkerson Method](../graphs/ford-fulkerson.md)
