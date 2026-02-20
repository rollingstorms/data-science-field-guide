---
id: ml.f1-score
title: F1 Score
tags: [classification, evaluation]
related: [ml.precision, ml.recall]
prereqs: [ml.precision, ml.recall]
---

# F1 Score

## Formula
\[
F_1 = \frac{2\,\mathrm{Precision}\,\mathrm{Recall}}{\mathrm{Precision}+\mathrm{Recall}}
\]

## Parameters
- Precision, Recall as defined

## What it means
Harmonic mean of precision and recall.

## Key properties
- Penalizes extreme imbalance between precision and recall
- Range \([0,1]\)

## Common gotchas
- Not meaningful if either precision or recall is undefined.
- F1 ignores true negatives, which can matter in some tasks.

## See also
- [Precision](../ml-metrics/precision.md)
- [Recall](../ml-metrics/recall.md)
