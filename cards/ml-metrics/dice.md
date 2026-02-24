---
id: ml.dice
title: Dice Coefficient (Sorensen-Dice)
tags: [ml, metrics, similarity]
related: [ml.jaccard, ml.f1-score]
prereqs: []
---

# Dice Coefficient (Sorensen-Dice)

<div class="formula" markdown="1">
## Formula
\[
D(A,B) = \frac{2|A\cap B|}{|A|+|B|}
\]

\[
D = \frac{2\mathrm{TP}}{2\mathrm{TP}+\mathrm{FP}+\mathrm{FN}}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A, B\): sets (top equation)
- \(\mathrm{TP}, \mathrm{FP}, \mathrm{FN}\): binary counts (bottom equation)

</div>
## What it means
Overlap measure that doubles the intersection and normalizes by total size.



## What it's used for
- Segmentation and set prediction overlap.
- Comparing binary masks when true negatives are less important.

## Key properties
- Range \([0,1]\); 1 means perfect overlap.
- Symmetric: \(D(A,B)=D(B,A)\).
- Relation to Jaccard: \(D=\frac{2J}{1+J}\), \(J=\frac{D}{2-D}\).
- For binary classification, Dice equals \(F_1\).

## Common gotchas
- Undefined when both sets empty; choose a convention (often 1.0).
- Ignores true negatives, so it can look high under strong class imbalance.

## Example
If \(\mathrm{TP}=30, \mathrm{FP}=10, \mathrm{FN}=5\),
\(D=2\cdot 30/(2\cdot 30+10+5)=0.800\).

## See also
- [Jaccard Similarity / IoU](../ml-metrics/jaccard.md)
- [F1 Score](../ml-metrics/f1-score.md)
