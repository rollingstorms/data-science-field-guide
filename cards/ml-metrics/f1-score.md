---
id: ml.f1-score
title: F1 Score
tags: [classification, evaluation]
related: [ml.precision, ml.recall]
prereqs: [ml.precision, ml.recall]
---

# F1 Score

<div class="formula" markdown="1">
## Formula
\[
F_1 = \frac{2\,\mathrm{Precision}\,\mathrm{Recall}}{\mathrm{Precision}+\mathrm{Recall}}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- Precision, Recall as defined

</div>
## What it means
Harmonic mean of precision and recall.



## What it's used for
- Balancing precision and recall in a single score.
- Model selection with imbalanced classes.
## Key properties
- Penalizes extreme imbalance between precision and recall
- Range \([0,1]\)

## Common gotchas
- Not meaningful if either precision or recall is undefined.
- F1 ignores true negatives, which can matter in some tasks.



## Example
With \(\mathrm{Precision}=0.75\) and \(\mathrm{Recall}=0.857\),
\(F_1=0.8\).
## See also
- [Precision](../ml-metrics/precision.md)
- [Recall](../ml-metrics/recall.md)
