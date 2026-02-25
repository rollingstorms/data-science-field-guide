---
id: graph.label-propagation
title: Label Propagation (LPA)
tags: [graphs, community-detection]
related: [graph.modularity]
prereqs: [graph.adjacency-matrix]
---

# Label Propagation (LPA)

<div class="formula" markdown="1">
## Formula
\[
\ell_i \leftarrow \arg\max_c \sum_j A_{ij}\,\mathbf{1}[\ell_j=c]
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A_{ij}\): adjacency (or weight) between nodes \(i,j\)
- \(\ell_i\): label of node \(i\)
- \(c\): candidate label

</div>
## What it means
Iteratively updates node labels to match the most frequent label in the neighborhood.



## What it's used for
- Fast, scalable community detection.
- Initializing or refining graph partitions.

## Key properties
- Near-linear time per iteration.
- Often converges to a partition without specifying the number of communities.

## Common gotchas
- Results depend on update order and tie-breaking.
- Can yield a single giant community on some graphs.

## Example
If node \(i\) has neighbors labeled \([2,2,3]\), then \(\ell_i\leftarrow 2\).
## How to Compute (Pseudocode)
```text
Input: graph G=(V,E), max iterations T
Output: node labels l[.]

initialize each node with a unique label

for iter from 1 to T:
  changed <- false
  for each node i (often in random order):
    choose the most frequent neighbor label around i
    break ties by a fixed rule or randomly
    if new label differs from l[i]:
      l[i] <- new label
      changed <- true
  if not changed:
    break

return labels l
```

## Complexity
- Time: Typically \(O(T|E|)\) for \(T\) passes over neighborhoods
- Space: \(O(|V|+|E|)\) including graph storage and labels
- Assumptions: Neighborhood scans dominate cost; runtime and output depend on update order and tie-breaking strategy

