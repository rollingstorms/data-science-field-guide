---
id: ml.auc-roc
title: ROC AUC
tags: [ml, metrics, ranking]
related: [ml.precision-recall-auc, ml.log-loss]
prereqs: [ml.confusion-matrix]
---

# ROC AUC

## Formula
\[
\mathrm{AUC} = P(s(x^+) > s(x^-)) + \tfrac{1}{2}P(s(x^+)=s(x^-))
\]

## Parameters
- \(s(\cdot)\): score function
- \(x^+\): positive example
- \(x^-\): negative example

## What it means
AUC is the area under the ROC curve (TPR vs FPR) as you sweep a score threshold.

## Key properties
- Threshold-independent ranking metric
- Invariant to any strictly monotone transform of scores

## Common gotchas
- AUC can look “good” under extreme class imbalance even when precision is poor
- If you care about top-of-list performance, consider PR AUC / precision@k
