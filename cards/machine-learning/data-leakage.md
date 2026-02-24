---
id: ml.data-leakage
title: Data Leakage
tags: [machine-learning, evaluation, workflow]
related: [ml.train-val-test-split, ml.cross-validation]
prereqs: []
---

# Data Leakage

<div class="formula" markdown="1">
## Formula
\[
P(\text{feature}\mid \text{deployment}) \ne P(\text{feature}\mid \text{training pipeline assumptions})
\]

\[
\text{Leakage} \Rightarrow \widehat{\text{generalization}}\ \text{too optimistic}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- Leakage often means information unavailable at prediction time appears during training/evaluation.

</div>
## What it means
Leakage happens when future or target-derived information enters training features, preprocessing, or validation setup.

## What it's used for
- Designing safe splits and pipelines.
- Debugging suspiciously high validation scores.
## Key properties
- Can come from temporal leakage, target leakage, duplicate rows, or preprocessing across splits.
- Often invisible unless you audit data generation timing.

## Common gotchas
- Standardizing on the full dataset before splitting is leakage.
- Feature definitions like "days since churn" can directly encode the label.

## Example
If a fraud model uses chargeback outcomes not available at authorization time, offline results will be inflated.

## See also
- [Train/Validation/Test Split](../machine-learning/train-validation-test-split.md)
- [Machine Learning Pipeline](../machine-learning/machine-learning-pipeline.md)
