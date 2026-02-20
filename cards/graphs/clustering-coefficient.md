---
id: graph.clustering-coefficient
title: Clustering Coefficient
tags: [graph-theory, networks]
related: [graph.graphs]
prereqs: [graph.graphs]
---

# Clustering Coefficient

## Formula
\[
C_i = \frac{2 e_i}{k_i(k_i-1)}
\]

## Parameters
- \(e_i\): edges among neighbors of node \(i\)
- \(k_i\): degree of node \(i\)

## What it means
Measures how close a node's neighbors are to being a clique.

## Key properties
- \(0 \le C_i \le 1\)
- Global coefficient averages \(C_i\) across nodes

## Common gotchas
- Undefined for \(k_i<2\); typically set to 0.
- Weighted and directed variants have different formulas.

## See also
- [Adjacency Matrix](../graphs/adjacency-matrix.md)
