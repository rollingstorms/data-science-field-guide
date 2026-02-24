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
