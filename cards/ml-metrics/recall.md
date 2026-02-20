---
id: ml.recall
title: Recall
tags: [classification, evaluation]
related: [ml.precision, ml.f1-score, ml.confusion-matrix]
prereqs: [ml.confusion-matrix]
---

# Recall

## Formula
\[
\operatorname{Recall} = \frac{\mathrm{TP}}{\mathrm{TP}+\mathrm{FN}}
\]

## Parameters
- \(\mathrm{TP}\): true positives
- \(\mathrm{FN}\): false negatives

## What it means
Of the actual positives, how many are correctly identified.

## Key properties
- Sensitive to false negatives
- Trades off with precision via the decision threshold

## Common gotchas
- Undefined if \(\mathrm{TP}+\mathrm{FN}=0\) (no positives in ground truth).
- Also called sensitivity or true positive rate.

## See also
- [Precision](../ml-metrics/precision.md)
