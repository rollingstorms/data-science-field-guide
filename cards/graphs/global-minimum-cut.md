---
id: graph.global-minimum-cut
title: Global Minimum Cut
tags: [graphs, algorithms, graph-theory]
related: [graph.minimum-cut, graph.karger-min-cut, graph.edge-cut-vs-vertex-cut]
prereqs: [graph.minimum-cut]
---

# Global Minimum Cut

<div class="formula" markdown="1">
## Formula
\[
\lambda(G)=\min_{\varnothing\ne S\subset V,\ S\ne V} \operatorname{cut}(S,V\setminus S)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(G=(V,E)\): graph (often undirected, weighted or unweighted)
- \(S\): nontrivial subset of vertices
- \(\operatorname{cut}(S,V\setminus S)\): total weight of crossing edges

</div>
## What it means
Global minimum cut finds the cheapest way to separate a graph into two nonempty parts without preselecting a source and sink.

## What it's used for
- Measuring overall edge connectivity / graph robustness.
- Graph partitioning primitives and randomized algorithm examples.
- Preprocessing for reliability and network vulnerability analyses.

## Key properties
- In unweighted undirected graphs, the value equals edge connectivity \(\lambda(G)\).
- Different from \(s\)-\(t\) minimum cut because \(s,t\) are not fixed.
- Can be solved deterministically (e.g., Stoer-Wagner) or randomized (e.g., Karger).

## Common gotchas
- The minimizing partition can isolate a single vertex.
- Directed global min-cut variants require different definitions/algorithms.
- Do not confuse global min cut with balanced cut objectives.

## Example
If the smallest set of edges whose removal disconnects a graph has total weight 3, then the global minimum cut value is 3.

## How to Compute (Pseudocode)
```text
Input: graph G
Output: global minimum cut value (and partition)

choose a global min-cut algorithm (for example, Stoer-Wagner or repeated Karger trials)
run the algorithm on G
return the minimum cut value and corresponding partition
```

## Complexity
- Time: Depends on the chosen algorithm (for example, randomized contraction methods vs deterministic global min-cut algorithms)
- Space: Depends on the chosen algorithm and graph representation
- Assumptions: Undirected global min-cut setting unless otherwise specified; directed variants use different algorithms/definitions

## See also
- [Minimum Cut](../graphs/minimum-cut.md)
- [Karger's Algorithm (Min Cut)](../graphs/karger-min-cut.md)
- [Edge Cut vs Vertex Cut](../graphs/edge-cut-vs-vertex-cut.md)
