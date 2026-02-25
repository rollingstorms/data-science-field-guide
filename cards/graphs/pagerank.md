---
id: graph.pagerank
title: PageRank
tags: [graph-theory, networks]
related: [graph.adjacency-matrix]
prereqs: [graph.adjacency-matrix]
---

# PageRank

<div class="formula" markdown="1">
## Formula
\[
r = \alpha P^T r + (1-\alpha) v
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(P\): column-stochastic transition matrix
- \(\alpha\in(0,1)\): damping factor
- \(v\): teleportation distribution

</div>
## What it means
Stationary distribution of a random surfer on the graph.



## What it's used for
- Ranking nodes by link structure (web pages, citations).
- Finding important nodes in directed networks.
## Key properties
- Unique solution when \(\alpha<1\) and \(v>0\)
- Can be computed via power iteration

## Common gotchas
- Must handle dangling nodes (zero out-degree).
- Personalization changes with \(v\).



## Example
Two nodes linking to each other with uniform \(v\) give
\(r=[0.5,0.5]\) for any \(\alpha<1\).
## How to Compute (Pseudocode)
```text
Input: directed graph, damping alpha, teleport vector v, iterations T (or tolerance eps)
Output: PageRank vector r

build stochastic transition matrix P (handle dangling nodes)
initialize r <- uniform distribution

repeat until convergence or T iterations:
  r_next <- alpha * transpose(P) * r + (1 - alpha) * v
  r <- r_next

return r
```

## Complexity
- Time: \(O(T|E|)\) with sparse power iteration (or until convergence) using adjacency-list/sparse-matrix multiplies
- Space: \(O(|V|+|E|)\) for sparse graph storage plus rank vectors
- Assumptions: \(T\) is the number of iterations; sparse implementation; dangling-node handling is included in transition updates

## See also
- [Adjacency Matrix](../graphs/adjacency-matrix.md)
