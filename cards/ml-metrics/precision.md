---
id: ml.precision
title: Precision
tags: [classification, evaluation]
related: [ml.recall, ml.f1-score, ml.confusion-matrix]
prereqs: [ml.confusion-matrix]
---

# Precision

<div class="formula" markdown="1">
## Formula
\[
\operatorname{Precision} = \frac{\mathrm{TP}}{\mathrm{TP}+\mathrm{FP}}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\mathrm{TP}\): true positives
- \(\mathrm{FP}\): false positives

</div>
## What it means
Of the predicted positives, how many are actually positive.



## What it's used for
- Estimating how many predicted positives are correct.
- Tuning thresholds when false positives are costly.
## Key properties
- Sensitive to false positives
- Trades off with recall via the decision threshold

## Common gotchas
- Undefined if \(\mathrm{TP}+\mathrm{FP}=0\) (no predicted positives).
- Macro vs micro averaging differ for imbalanced data.



## Example
If \(\mathrm{TP}=30\) and \(\mathrm{FP}=10\),
\(\mathrm{Precision}=30/(30+10)=0.75\).
## See also
- [Recall](../ml-metrics/recall.md)
