---
id: ml.jaccard
title: Jaccard Similarity / IoU
tags: [ml, metrics, similarity]
related: [ml.f1-score, ml.dice]
prereqs: []
---

# Jaccard Similarity (Intersection over Union)

<div class="formula" markdown="1">
## Formula
\[
J(A,B) = \frac{|A\cap B|}{|A\cup B|}
\]

\[
J = \frac{\mathrm{TP}}{\mathrm{TP}+\mathrm{FP}+\mathrm{FN}}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A, B\): sets (top equation)
- \(\mathrm{TP}, \mathrm{FP}, \mathrm{FN}\): binary counts (bottom equation)

</div>
## What it means
Overlap ratio between predicted and true items.



## What it's used for
- Evaluating overlap in segmentation or set prediction tasks.
- Comparing binary masks (IoU).
## Key properties
- Relation to Dice / F1 (binary) shown below.

\[
D = \frac{2\mathrm{TP}}{2\mathrm{TP}+\mathrm{FP}+\mathrm{FN}}
\]

\[
D = \frac{2J}{1+J},\quad J=\frac{D}{2-D}
\]

## Common gotchas
- Undefined when both sets empty; choose a convention (often 1.0).

## Example
If \(\mathrm{TP}=30, \mathrm{FP}=10, \mathrm{FN}=5\),
\(J=30/(30+10+5)=0.667\).

## How to Compute (Pseudocode)
```text
Input: true labels and predicted labels (or sets/masks, depending on the metric)
Output: Jaccard score

build the contingency table / overlap counts needed by the metric
compute the metric numerator and denominator from those counts
apply any normalization/adjustment terms required by the definition
return the score
```

## Complexity
- Time: Typically \(O(n)\) to accumulate counts over \(n\) labeled examples once labels/sets are aligned (plus optional \(O(k^2)\) work on contingency tables for some metrics)
- Space: Depends on the contingency-table size (from \(O(1)\) count accumulators to \(O(k_1 k_2)\) for label-table storage)
- Assumptions: Exact complexity depends on binary-mask vs multiclass-label formulation and whether pair-count terms are computed from counts or explicit pairs

