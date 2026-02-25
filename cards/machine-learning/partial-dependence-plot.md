---
id: ml.partial-dependence-plot
title: Partial Dependence Plot (PDP)
tags: [machine-learning, interpretability]
related: []
prereqs: []
---

# Partial Dependence Plot (PDP)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{PD}_S(z_S)=\mathbb{E}_{X_C}[f(z_S, X_C)]
\]

</div>
## Plot
```plot
fn: 0.6*sin(x)+0.12*x
xmin: -6
xmax: 6
ymin: -1.4
ymax: 1.4
height: 280
title: Example partial dependence shape (illustrative)
```

<div class="parameters" markdown="1">
## Parameters
- \(S\): feature subset of interest
- \(C\): complementary feature set
- \(z_S\): fixed value(s) for features in \(S\)

</div>
## What it means
A PDP shows the average model prediction as selected feature values vary while averaging over other features.

## What it's used for
- Global effect visualization for tabular models.
- Exploring nonlinear feature-response shapes.
## Key properties
- Easy to read for one or two features.
- Averages can hide heterogeneous effects across subgroups.

## Common gotchas
- Can be misleading with strongly correlated features or unrealistic feature combinations.
- Check ICE plots when interactions matter.

## Example
Plot predicted churn risk versus monthly usage while averaging over other customer attributes.

## How to Compute (Pseudocode)
```text
Input: trained model f, dataset X, target feature(s) S, grid values G
Output: PDP values over the grid

for each grid value z in G:
  X_copy <- copy of X
  set feature(s) S in every row of X_copy to z
  preds <- model predictions f(X_copy)
  PD[z] <- average(preds)

return {(z, PD[z])}
```

## Complexity
- Time: \(O(|G|\cdot \mathrm{PredCost}(X))\) for \(|G|\) grid points, where \(\mathrm{PredCost}(X)\) is the batch prediction cost on the dataset
- Space: Typically \(O(n d)\) if modified dataset copies are materialized (or lower with in-place feature replacement)
- Assumptions: \(n\) examples, \(d\) features; one-way PDP shown (two-way PDPs multiply grid size)
