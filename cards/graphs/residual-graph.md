---
id: graph.residual-graph
title: Residual Graph
tags: [graphs, algorithms, network-flow]
related: [graph.flow-network, graph.augmenting-path, graph.ford-fulkerson]
prereqs: [graph.flow-network, graph.maximum-flow]
---

# Residual Graph

<div class="formula" markdown="1">
## Formula
\[
c_f(u,v)=c(u,v)-f(u,v),\qquad
c_f(v,u)=f(u,v)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(f(u,v)\): current flow on edge \((u,v)\)
- \(c(u,v)\): original capacity
- \(c_f\): residual capacity under flow \(f\)

</div>
## What it means
The residual graph shows where additional flow can still be pushed (forward edges) and where existing flow can be canceled/rerouted (backward edges).

## What it's used for
- Searching for augmenting paths in max-flow algorithms.
- Detecting optimality when no augmenting path remains.
- Extracting a minimum cut after max-flow.

## Key properties
- Residual capacities depend on the current flow.
- Backward residual edges encode the ability to undo previous choices.
- Reachability in the residual graph is central to Ford-Fulkerson proofs.

## Common gotchas
- Residual edges are algorithmic constructs, not necessarily original graph edges.
- A missing original reverse edge does not prevent a residual reverse edge from existing.
- Always recompute/update residual capacities after augmentation.

## Example
If an edge of capacity 10 currently carries flow 6, the residual graph has forward capacity 4 and backward capacity 6 for that pair.

## See also
- [Augmenting Path](../graphs/augmenting-path.md)
- [Ford-Fulkerson Method](../graphs/ford-fulkerson.md)
- [Max-Flow Min-Cut Theorem](../graphs/max-flow-min-cut-theorem.md)
