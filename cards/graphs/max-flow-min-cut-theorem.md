---
id: graph.max-flow-min-cut-theorem
title: Max-Flow Min-Cut Theorem
tags: [graphs, algorithms, optimization, network-flow]
related: [graph.maximum-flow, graph.minimum-cut, graph.residual-graph]
prereqs: [graph.maximum-flow, graph.minimum-cut]
---

# Max-Flow Min-Cut Theorem

<div class="formula" markdown="1">
## Formula
\[
\max\{\text{value of an } s\text{-}t \text{ flow}\}
=
\min\{\text{capacity of an } s\text{-}t \text{ cut}\}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(s,t\): source and sink
- Flow value: total net flow leaving \(s\)
- Cut capacity: sum of capacities from \(S\) to \(T\)

</div>
## What it means
The best possible throughput from \(s\) to \(t\) equals the capacity of the tightest bottleneck cut separating them.

## What it's used for
- Certifying optimality of max-flow solutions.
- Turning flow problems into cut/partition reasoning.
- Deriving algorithms and dual interpretations in networks.

## Key properties
- Any cut gives an upper bound on any feasible flow.
- Equality is achieved at optimum.
- Residual reachability after a max-flow computation can produce a minimum cut.

## Common gotchas
- The theorem is for \(s\)-\(t\) cuts/flows, not arbitrary graph partitions.
- Cut capacity uses original capacities, not residual capacities.
- Equality concerns the optimal values; the optimizing flow and cut themselves are different objects.

## Example
If a computed flow has value 12 and the reachable/non-reachable partition in the residual graph has cut capacity 12, the solution is provably optimal.

## How to Compute (Pseudocode)
```text
Input: flow network G, source s, sink t
Output: max-flow value and a matching min-cut certificate

run a max-flow algorithm to obtain flow f and residual graph G_f
S <- vertices reachable from s in G_f using positive-residual edges
T <- V \ S
cut_capacity <- sum of original capacities c(u,v) for u in S, v in T
flow_value <- value of f

verify flow_value == cut_capacity
return flow_value, (S, T)
```

## Complexity
- Time: Dominated by the chosen max-flow algorithm, plus \(O(|V|+|E|)\) for residual reachability and cut-capacity computation
- Space: \(O(|V|+|E|)\) for residual graph and traversal state
- Assumptions: This is a computational certification workflow for the theorem in the \(s\)-\(t\) setting; theorem statement itself is not an algorithm

## See also
- [Maximum Flow](../graphs/maximum-flow.md)
- [Minimum Cut](../graphs/minimum-cut.md)
- [Residual Graph](../graphs/residual-graph.md)
