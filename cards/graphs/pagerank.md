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
\(r=[0.5,0.5]\) for any \(lpha<1\).
## See also
- [Adjacency Matrix](../graphs/adjacency-matrix.md)
