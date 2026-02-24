---
id: ml.recall
title: Recall
tags: [classification, evaluation]
related: [ml.precision, ml.f1-score, ml.confusion-matrix]
prereqs: [ml.confusion-matrix]
---

# Recall

<div class="formula" markdown="1">
## Formula
\[
\operatorname{Recall} = \frac{\mathrm{TP}}{\mathrm{TP}+\mathrm{FN}}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\mathrm{TP}\): true positives
- \(\mathrm{FN}\): false negatives

</div>
## What it means
Of the actual positives, how many are correctly identified.



## What it's used for
- Estimating how many true positives were found.
- Tuning thresholds when false negatives are costly.
## Key properties
- Sensitive to false negatives
- Trades off with precision via the decision threshold

## Common gotchas
- Undefined if \(\mathrm{TP}+\mathrm{FN}=0\) (no positives in ground truth).
- Also called sensitivity or true positive rate.



## Example
If \(\mathrm{TP}=30\) and \(\mathrm{FN}=5\),
\(\mathrm{Recall}=30/(30+5)=0.857\).
## See also
- [Precision](../ml-metrics/precision.md)
