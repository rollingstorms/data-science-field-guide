---
id: ml.precision
title: Precision
tags: [classification, evaluation]
related: [ml.recall, ml.f1-score, ml.confusion-matrix]
prereqs: [ml.confusion-matrix]
---

# Precision

## Formula
\[
\operatorname{Precision} = \frac{\mathrm{TP}}{\mathrm{TP}+\mathrm{FP}}
\]

## Parameters
- \(\mathrm{TP}\): true positives
- \(\mathrm{FP}\): false positives

## What it means
Of the predicted positives, how many are actually positive.

## Key properties
- Sensitive to false positives
- Trades off with recall via the decision threshold

## Common gotchas
- Undefined if \(\mathrm{TP}+\mathrm{FP}=0\) (no predicted positives).
- Macro vs micro averaging differ for imbalanced data.

## See also
- [Recall](../ml-metrics/recall.md)
