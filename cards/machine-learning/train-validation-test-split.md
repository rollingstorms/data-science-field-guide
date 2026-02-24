---
id: ml.train-val-test-split
title: Train/Validation/Test Split
tags: [machine-learning, evaluation, workflow]
related: [ml.cross-validation, ml.data-leakage]
prereqs: []
---

# Train/Validation/Test Split

<div class="formula" markdown="1">
## Formula
\[
\mathcal{D}=\mathcal{D}_{train}\ \cup\ \mathcal{D}_{val}\ \cup\ \mathcal{D}_{test}
\]

\[
\mathcal{D}_{train}\cap\mathcal{D}_{val}=\mathcal{D}_{train}\cap\mathcal{D}_{test}=\mathcal{D}_{val}\cap\mathcal{D}_{test}=\varnothing
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\mathcal{D}\): full dataset
- \(\mathcal{D}_{train},\mathcal{D}_{val},\mathcal{D}_{test}\): disjoint splits

</div>
## What it means
Separates data for fitting, model selection, and final unbiased evaluation.

## What it's used for
- Training on one subset and tuning on another.
- Holding out a final test set for one-time reporting.
## Key properties
- Test set should be touched only after model decisions are finalized.
- Stratified splits are common for classification.

## Common gotchas
- Random splits can leak future information in time series.
- Repeated peeking at the test set turns it into a validation set.

## Example
Use 70/15/15 or 80/10/10 splits, adjusted for dataset size and class balance.

## See also
- [Cross-Validation](../machine-learning/cross-validation.md)
- [Data Leakage](../machine-learning/data-leakage.md)
