---
id: ml.permutation-feature-importance
title: Permutation Feature Importance
tags: [machine-learning, interpretability]
related: []
prereqs: []
---

# Permutation Feature Importance

<div class="formula" markdown="1">
## Formula
\[
I_j = M(f, X, y) - M\big(f, \pi_j(X), y\big)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(M\): metric (higher-is-better shown here)
- \(\pi_j(X)\): dataset with feature \(j\) randomly permuted

</div>
## What it means
Measures importance by how much performance drops when a feature’s information is destroyed.

## What it's used for
- Model-agnostic feature ranking on validation/test sets.
- Sanity-checking impurity-based tree importances.
## Key properties
- Simple and widely applicable.
- Works best with a meaningful held-out metric.

## Common gotchas
- Correlated features can hide each other’s importance.
- Permutation on training data can overstate importance due to overfitting.

## Example
If permuting "account_age" sharply drops AUC, the feature is important for the model’s ranking.
