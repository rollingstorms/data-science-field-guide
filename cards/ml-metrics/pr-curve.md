---
id: ml.pr-curve
title: Precision-Recall Curve
tags: [classification, evaluation]
related: [ml.precision, ml.recall, ml.average-precision]
prereqs: [ml.precision, ml.recall]
---

# Precision-Recall Curve

## Formula
\[
\mathcal{C} = \{(\mathrm{Precision}(t),\,\mathrm{Recall}(t)) : t \in \mathbb{R}\}
\]

## Parameters
- \(t\): decision threshold

## What it means
Tradeoff between precision and recall across thresholds.

## Key properties
- More informative than ROC for heavy class imbalance
- Area under PR curve equals average precision for common definitions

## Common gotchas
- Baseline is the positive class prevalence, not 0.5.
- Different interpolation conventions change AP.

## See also
- [Average Precision](../ml-metrics/average-precision.md)
