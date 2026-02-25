---
id: graph.message-passing
title: Message Passing (on Graphs)
tags: [graphs, graph-ml, gnn]
related: [graph.adjacency-matrix, graph.laplacian]
prereqs: [graph.adjacency-matrix]
---

# Message Passing (on Graphs)

<div class="formula" markdown="1">
## Formula
\[
m_v^{(t+1)}=\mathrm{AGG}\big(\{\,\phi(h_v^{(t)},h_u^{(t)},e_{uv}) : u\in \mathcal{N}(v)\,\}\big)
\]

\[
h_v^{(t+1)}=\psi(h_v^{(t)}, m_v^{(t+1)})
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(h_v^{(t)}\): node state/embedding for node \(v\) at step/layer \(t\)
- \(\mathcal{N}(v)\): neighbors of node \(v\)
- \(e_{uv}\): edge features (optional)
- \(\phi\): message function
- \(\mathrm{AGG}\): permutation-invariant aggregation (sum/mean/max)
- \(\psi\): update function

</div>
## What it means
Message passing updates each node representation by aggregating information from its neighbors, repeated over multiple layers/hops.

## What it's used for
- Graph neural networks for node, edge, and graph prediction.
- Classical graph computations can also be viewed as message passing (e.g., belief propagation, some diffusion methods).

## Key properties
- After \(k\) rounds, a node can depend on information up to \(k\) hops away.
- Aggregation is typically permutation-invariant to respect graph structure.

## Common gotchas
- Deep message passing can oversmooth node representations.
- Directionality/self-loops/normalization choices strongly affect behavior.

## Example
A mean-aggregation layer sets each node's next embedding to the average of its neighbors' transformed embeddings.

## How to Compute (Pseudocode)
```text
Input: graph G=(V,E), node states h^(0), message/update functions phi, AGG, psi, rounds T
Output: updated node states h^(T)

for t from 0 to T-1:
  for each node v in V:
    messages <- []
    for each neighbor u in N(v):
      append phi(h_v^(t), h_u^(t), e_uv) to messages
    m_v <- AGG(messages)
  for each node v in V:
    h_v^(t+1) <- psi(h_v^(t), m_v)

return h^(T)
```

## Complexity
- Time: Typically \(O(T(|V|+|E|)\cdot c_{msg})\) to \(O(T|E|\cdot c_{msg})\), where cost depends on message/update function complexity
- Space: \(O(|V|\cdot d_h + |E|\cdot d_e)\) for node/edge features plus intermediate message buffers (implementation-dependent)
- Assumptions: \(T\) message-passing rounds; sparse graph traversal; tensor dimensions and batching determine constants

## See also
- [Adjacency Matrix](../graphs/adjacency-matrix.md)
- [Graph Laplacian](../graphs/laplacian.md)
