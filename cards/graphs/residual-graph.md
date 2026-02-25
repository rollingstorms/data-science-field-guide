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

## How to Compute (Pseudocode)
```text
Input: flow network G with capacities c and current flow f
Output: residual graph G_f

initialize empty residual graph G_f
for each directed edge (u, v) in G:
  forward_residual <- c(u,v) - f(u,v)
  backward_residual <- f(u,v)
  if forward_residual > 0:
    add residual edge (u, v) with capacity forward_residual
  if backward_residual > 0:
    add residual edge (v, u) with capacity backward_residual

return G_f
```

## Complexity
- Time: \(O(|E|)\) to compute/update residual capacities from the current flow
- Space: \(O(|V|+|E|)\) for the residual graph representation (up to a constant-factor multiple of original edges)
- Assumptions: Directed network representation; reverse residual edges are included even if the original reverse edge is absent

## See also
- [Augmenting Path](../graphs/augmenting-path.md)
- [Ford-Fulkerson Method](../graphs/ford-fulkerson.md)
- [Max-Flow Min-Cut Theorem](../graphs/max-flow-min-cut-theorem.md)
