---
id: graph.pagerank
title: PageRank
tags: [graph-theory, networks]
related: [graph.adjacency-matrix]
prereqs: [graph.adjacency-matrix]
---

# PageRank

## Formula
\[
r = \alpha P^T r + (1-\alpha) v
\]

## Parameters
- \(P\): column-stochastic transition matrix
- \(\alpha\in(0,1)\): damping factor
- \(v\): teleportation distribution

## What it means
Stationary distribution of a random surfer on the graph.

## Key properties
- Unique solution when \(\alpha<1\) and \(v>0\)
- Can be computed via power iteration

## Common gotchas
- Must handle dangling nodes (zero out-degree).
- Personalization changes with \(v\).

## See also
- [Adjacency Matrix](../graphs/adjacency-matrix.md)
