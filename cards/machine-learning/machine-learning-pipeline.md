---
id: ml.machine-learning-pipeline
title: Machine Learning Pipeline
tags: [machine-learning, production]
related: []
prereqs: []
---

# Machine Learning Pipeline

<div class="formula" markdown="1">
## Formula
\[
\hat y = (T_n\circ\cdots\circ T_1\circ f)(x)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(T_i\): preprocessing/transformation steps
- \(f\): estimator

</div>
## What it means
A pipeline packages preprocessing and modeling into one reproducible object with consistent train/serve behavior.

## What it's used for
- Preventing leakage during CV.
- Reproducible training and deployment preprocessing.
## Key properties
- Transforms are fit on training data and applied consistently to validation/test/production data.
- Makes hyperparameter tuning across preprocessing + model easier.

## Common gotchas
- Ad hoc notebook preprocessing often diverges from production scoring.
- Pipelines still need schema/version checks in production.

## Example
Combine imputation, one-hot encoding, scaling, and logistic regression in a single CV-tunable pipeline.
