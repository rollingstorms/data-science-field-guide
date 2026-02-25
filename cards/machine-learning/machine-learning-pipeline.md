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

## How to Compute (Pseudocode)
```text
Input: raw data X, targets y, ordered transforms T1..Tn, estimator f
Output: fitted pipeline and predictions

# Training
Z <- X
for each transform T_i in order:
  fit T_i on Z (and y if needed)
  Z <- transform(T_i, Z)
fit estimator f on Z and y

# Inference
for new input x_new:
  z_new <- apply stored transforms T1..Tn in the same order
  y_hat <- predict with f on z_new

return pipeline
```

## Complexity
- Time: Sum of the fit/predict costs of all pipeline steps (transforms plus estimator); repeated evaluation (for example, CV) multiplies the total pipeline cost
- Space: Sum of fitted state across transforms and estimator, plus intermediate representations
- Assumptions: Exact complexity is pipeline-dependent; ordering and data representation (dense/sparse) can materially change runtime/memory

