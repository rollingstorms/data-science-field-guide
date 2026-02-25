---
id: graph.edge-cut-vs-vertex-cut
title: Edge Cut vs Vertex Cut
tags: [graphs, graph-theory, connectivity]
related: [graph.minimum-cut, graph.connected-components, graph.global-minimum-cut]
prereqs: [graph.graph-algorithms, graph.connected-components]
---

# Edge Cut vs Vertex Cut

<div class="formula" markdown="1">
## Formula
\[
\lambda(G)=\min |F| \text{ over edge cuts }F,\qquad
\kappa(G)=\min |S| \text{ over vertex cuts }S
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- Edge cut \(F\): set of edges whose removal disconnects the graph
- Vertex cut \(S\): set of vertices whose removal disconnects the graph
- \(\lambda(G)\): edge connectivity
- \(\kappa(G)\): vertex connectivity

</div>
## What it means
Edge cuts disconnect a graph by removing edges; vertex cuts disconnect it by removing nodes. They measure different kinds of robustness.

## What it's used for
- Network reliability analysis under link failures vs node failures.
- Choosing the right cut formulation for a problem statement.
- Relating connectivity notions in graph theory.

## Key properties
- Edge cut and vertex cut are different objects with different minima.
- \(s\)-\(t\) versions exist for both edge and vertex cuts.
- Vertex-cut problems can often be reduced to edge-cut problems by node splitting.

## Common gotchas
- "Minimum cut" in flow contexts usually means minimum edge cut with capacities.
- Removing a source or sink is often disallowed in \(s\)-\(t\) vertex-cut formulations.
- Weighted versions require defining costs on edges or vertices explicitly.

## Example
A star graph has edge connectivity 1 and vertex connectivity 1, but many graphs have different values for the two measures.

## How to Compute (Pseudocode)
```text
Input: graph G and a connectivity question (edge cut or vertex cut)
Output: appropriate cut formulation/result

if the problem is about removing links/edges:
  formulate an edge-cut problem (possibly as a min-cut / max-flow instance)
else if the problem is about removing nodes:
  formulate a vertex-cut problem
  optionally reduce to edge cut via node splitting for computation

solve with the appropriate algorithm and report the cut set/value
```

## Complexity
- Time: Depends on the chosen cut formulation and solver (edge-cut and vertex-cut computations can have different reductions/algorithms)
- Space: Depends on the solver and whether graph transformations (such as node splitting) are materialized
- Assumptions: This card is a formulation/selection guide; \(s\)-\(t\) vs global variants and weighted vs unweighted settings change the computational workflow

## See also
- [Minimum Cut](../graphs/minimum-cut.md)
- [Connected Components](../graphs/connected-components.md)
- [Global Minimum Cut](../graphs/global-minimum-cut.md)
