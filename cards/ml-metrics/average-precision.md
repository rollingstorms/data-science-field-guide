---
id: ml.average-precision
title: Average Precision
tags: [classification, evaluation]
related: [ml.pr-curve]
prereqs: [ml.pr-curve]
---

# Average Precision

## Formula
\[
\operatorname{AP} = \sum_k (R_k - R_{k-1})\,P_k
\]

## Parameters
- \(P_k\): precision at threshold \(k\)
- \(R_k\): recall at threshold \(k\)

## What it means
Area under the precision-recall curve using a stepwise approximation.

## Key properties
- \(0 \le \operatorname{AP} \le 1\)
- For ranked lists, AP summarizes precision at each recall increase

## Common gotchas
- Different libraries use different interpolation schemes.
- AP differs from AUC-PR if interpolation changes.

## See also
- [Precision-Recall Curve](../ml-metrics/pr-curve.md)
