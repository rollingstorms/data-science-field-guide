---
id: graph.flow-network
title: Flow Network
tags: [graphs, graph-theory, network-flow]
related: [graph.maximum-flow, graph.residual-graph, graph.minimum-cut]
prereqs: [graph.graph-algorithms]
---

# Flow Network

<div class="formula" markdown="1">
## Formula
\[
G=(V,E),\quad c:E\to \mathbb{R}_{\ge 0},\quad s,t\in V
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(V\): nodes
- \(E\): directed edges
- \(c(e)\): nonnegative capacity on edge \(e\)
- \(s,t\): distinguished source and sink

</div>
## What it means
A flow network is a graph model for sending quantity from a source to a sink subject to edge capacity limits.

## What it's used for
- Modeling transportation, communication, and supply chains.
- Input structure for max-flow/min-cut algorithms.
- Reductions for matching and assignment problems.

## Key properties
- Usually represented as a directed graph with capacities.
- A flow assigns amounts to edges while respecting capacities and conservation.
- Residual networks capture remaining augmentable capacity.

## Common gotchas
- Undirected capacities are typically modeled with two directed edges.
- Source/sink choice changes the max-flow/min-cut problem.
- Capacity 0 edges can be ignored but may still appear in residual constructions.

## Example
Treat routers as nodes and link bandwidths as capacities to analyze achievable throughput from an origin router to a destination router.

## How to Compute (Pseudocode)
```text
Input: problem entities and capacities (nodes, links, source, sink)
Output: flow-network representation G=(V,E,c,s,t)

create a directed node for each entity/state
add directed edges for allowed transfers/interactions
assign nonnegative capacity c(e) to each edge
choose source s and sink t
return (V, E, c, s, t)
```

## Complexity
- Time: Typically \(O(|V|+|E|)\) to build the representation once the input entities/relations are specified
- Space: \(O(|V|+|E|)\) for the graph and capacities
- Assumptions: Graph-construction cost excludes upstream data extraction/feature engineering; exact cost depends on how the original problem is encoded

## See also
- [Maximum Flow](../graphs/maximum-flow.md)
- [Residual Graph](../graphs/residual-graph.md)
- [Minimum Cut](../graphs/minimum-cut.md)
