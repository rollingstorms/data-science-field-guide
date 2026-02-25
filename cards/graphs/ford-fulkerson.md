---
id: graph.ford-fulkerson
title: Ford-Fulkerson Method
tags: [graphs, algorithms, network-flow]
related: [graph.maximum-flow, graph.augmenting-path, graph.edmonds-karp]
prereqs: [graph.maximum-flow, graph.residual-graph]
---

# Ford-Fulkerson Method

<div class="formula" markdown="1">
## Formula
\[
f \leftarrow f + \Delta \text{ along an augmenting path } P,\quad
\Delta=\min_{e\in P} c_f(e)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(f\): current feasible flow
- \(P\): augmenting path in residual graph
- \(\Delta\): path bottleneck residual capacity

</div>
## What it means
Ford-Fulkerson repeatedly finds augmenting paths and pushes as much additional flow as possible along each one.

## What it's used for
- Core framework for solving maximum-flow problems.
- Foundation for Edmonds-Karp and Dinic.

## Key properties
- Terminates with a maximum flow for integer capacities.
- Runtime depends on how augmenting paths are chosen.
- Conceptually simple and proof-friendly.

## Common gotchas
- With irrational capacities, naive path choices can fail to terminate.
- "Ford-Fulkerson" is a method family, not a single fixed algorithm.
- Efficient implementations require explicit residual graph updates.

## Example
Starting from zero flow, keep augmenting until no \(s\)-\(t\) path remains in the residual graph; the final flow is maximum.

## See also
- [Augmenting Path](../graphs/augmenting-path.md)
- [Edmonds-Karp Algorithm](../graphs/edmonds-karp.md)
- [Dinic's Algorithm](../graphs/dinic.md)
