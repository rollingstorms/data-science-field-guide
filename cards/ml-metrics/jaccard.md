---
id: ml.jaccard
title: Jaccard Similarity / IoU
tags: [ml, metrics, similarity]
related: [ml.f1-score, ml.dice]
prereqs: []
---

# Jaccard Similarity (Intersection over Union)

## Formula
\[
J(A,B) = \frac{|A\cap B|}{|A\cup B|}
\]

\[
J = \frac{\mathrm{TP}}{\mathrm{TP}+\mathrm{FP}+\mathrm{FN}}
\]

## Parameters
- \(A, B\): sets (top equation)
- \(\mathrm{TP}, \mathrm{FP}, \mathrm{FN}\): binary counts (bottom equation)

## What it means
Overlap ratio between predicted and true items.

## Key properties
- Relation to Dice / F1 (binary):
  \[
  D = \frac{2\mathrm{TP}}{2\mathrm{TP}+\mathrm{FP}+\mathrm{FN}}
  \]
  \[
  D = \frac{2J}{1+J},\quad J=\frac{D}{2-D}
  \]

## Common gotchas
- Undefined when both sets empty; choose a convention (often 1.0).
