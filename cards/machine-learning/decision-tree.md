---
id: ml.decision-tree
title: Decision Tree
tags: [machine-learning, models]
related: [ml.random-forest, ml.gradient-boosting]
prereqs: []
---

# Decision Tree

<div class="formula" markdown="1">
## Formula
\[
\text{Choose split } s^* = \arg\max_s\ \Delta I(s)
\]

\[
\Delta I(s)=I(\text{parent})-\sum_{c\in\{L,R\}}\frac{n_c}{n}I(c)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(I\): impurity (e.g., Gini/entropy/MSE)
- \(s\): candidate split

</div>
## What it means
A decision tree recursively partitions feature space into regions with simple prediction rules.

## What it's used for
- Interpretable tabular modeling.
- Capturing nonlinear interactions without feature scaling.
## Key properties
- Handles mixed feature types with preprocessing choices.
- Can overfit without depth/min-samples constraints.

## Common gotchas
- Small data changes can produce very different trees.
- Greedy splitting is not globally optimal.

## Example
A tree might first split on income, then on account age to predict default risk.

## See also
- [Cross-Validation](../machine-learning/cross-validation.md)
