---
id: graph.karger-min-cut
title: Karger's Algorithm (Min Cut)
tags: [graphs, algorithms, randomized]
related: [graph.global-minimum-cut, graph.minimum-cut]
prereqs: [graph.global-minimum-cut]
---

# Karger's Algorithm (Min Cut)

<div class="formula" markdown="1">
## Formula
\[
\text{Repeat random edge contractions until 2 supernodes remain; return crossing edges}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- Random edge contraction: merge endpoints into one supernode
- Parallel edges: kept after contraction
- Self-loops: discarded after contraction

</div>
## What it means
Karger's algorithm is a randomized algorithm for global min cut that repeatedly contracts random edges; surviving cuts correspond to cuts in the original graph.

## What it's used for
- Teaching randomized algorithms and success amplification.
- Approximate/Monte-Carlo style min-cut computation by repeated trials.

## Key properties
- A single run finds the true global min cut with nonzero probability.
- Repeating independently boosts success probability.
- Particularly elegant for unweighted undirected graphs.

## Common gotchas
- One run is not reliable enough in general; repetition is essential.
- Parallel edges matter because they encode multiplicity in cut size.
- Standard contraction form is for global min cut, not directly \(s\)-\(t\) min cut.

## Example
Run random contractions many times and keep the smallest cut found; with enough trials, the probability of missing the true min cut becomes small.

## How to Compute (Pseudocode)
```text
Input: connected undirected multigraph G, number of trials T
Output: best cut found

best_cut <- infinity
for trial from 1 to T:
  H <- copy of G
  while number of supernodes in H > 2:
    choose a uniformly random edge (u, v) in H
    contract (u, v) into one supernode
    remove self-loops
  cut_size <- number (or total weight) of edges between the 2 remaining supernodes
  best_cut <- min(best_cut, cut_size)

return best_cut
```

## Complexity
- Time: \(O(T |V|^2)\) to \(O(T |E|)\)-style bounds depending on the contraction data structure/implementation (naive implementations are often slower)
- Space: \(O(|V|+|E|)\) per trial to store the working multigraph copy
- Assumptions: Undirected graph; \(T\) independent trials for success amplification; exact constants and asymptotics depend on how contractions are represented

## See also
- [Global Minimum Cut](../graphs/global-minimum-cut.md)
- [Minimum Cut](../graphs/minimum-cut.md)
