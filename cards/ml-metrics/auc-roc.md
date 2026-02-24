---
id: ml.auc-roc
title: ROC AUC
tags: [ml, metrics, ranking]
related: [ml.precision-recall-auc, ml.log-loss]
prereqs: [ml.confusion-matrix]
---

# ROC AUC

<div class="formula" markdown="1">
## Formula
\[
\mathrm{AUC} = P(s(x^+) > s(x^-)) + \tfrac{1}{2}P(s(x^+)=s(x^-))
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(s(\cdot)\): score function
- \(x^+\): positive example
- \(x^-\): negative example

</div>
## What it means
AUC is the area under the ROC curve (TPR vs FPR) as you sweep a score threshold.



## What it's used for
- Measuring ranking quality of binary classifiers.
- Comparing models independent of a threshold.
## Key properties
- Threshold-independent ranking metric
- Invariant to any strictly monotone transform of scores

## Common gotchas
- AUC can look “good” under extreme class imbalance even when precision is poor
- If you care about top-of-list performance, consider PR AUC / precision@k

## Example
If all positives are scored above all negatives,
AUC = 1.0.
