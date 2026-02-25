---
id: graph.graph-motifs
title: Graph Motifs
tags: [graph-theory, networks, statistics]
related: [graph.network-significance-profile]
prereqs: [graph.adjacency-matrix]
---

# Graph Motifs

<div class="formula" markdown="1">
## Formula
\[
Z_i = \frac{N_i^{\mathrm{obs}} - \mu_i^{\mathrm{null}}}{\sigma_i^{\mathrm{null}}}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(N_i^{\mathrm{obs}}\): observed count of motif \(i\) in the graph
- \(\mu_i^{\mathrm{null}}\): mean motif count under a chosen null model
- \(\sigma_i^{\mathrm{null}}\): standard deviation under the null model
- \(Z_i\): motif over/under-representation score

</div>
## What it means
Graph motifs are small subgraph patterns (for example triangles, feed-forward loops, or wedges) that appear significantly more or less often than expected under a null model.

They are used as building blocks for characterizing local network structure.

## What it's used for
- Comparing structural patterns across networks.
- Identifying functionally meaningful local wiring patterns.
- Building motif-based signatures and significance profiles.

## Key properties
- Motifs are defined relative to a subgraph size (for example 3-node or 4-node motifs).
- Significance depends on the null model, not just raw counts.
- Directed and undirected motif sets differ.

## Common gotchas
- Raw motif counts are hard to compare across graphs of different sizes/densities.
- Different null models can produce different significance conclusions.
- Motif enumeration can become expensive for larger subgraph sizes.

## Example
In a directed network, a feed-forward loop may occur much more often than in degree-preserving random graphs, giving it a large positive motif z-score.

## See also
- [Network Significance Profile](../graphs/network-significance-profile.md)
- [Clustering Coefficient](../graphs/clustering-coefficient.md)
