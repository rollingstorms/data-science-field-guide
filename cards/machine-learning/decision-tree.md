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

## How to Compute (Pseudocode)
```text
Input: training data X, targets y, stopping rules
Output: decision tree

function BUILD_NODE(data):
  if stopping_rule_met(data):
    return leaf(prediction_from(data))

  evaluate candidate splits and choose best split s*
  split data into left_data, right_data using s*

  node <- internal_node(split=s*)
  node.left <- BUILD_NODE(left_data)
  node.right <- BUILD_NODE(right_data)
  return node

return BUILD_NODE((X, y))
```

## Complexity
- Time: Depends on the split search strategy and implementation; a common training-time bound is roughly \(O(n d \log n)\) to \(O(n d n_{levels})\) for greedy tree growth on tabular data
- Space: Typically \(O(n d)\) for data storage plus tree structure and recursion/work buffers
- Assumptions: \(n\) samples, \(d\) features; exact split search, feature types, and sorting reuse strongly affect practical complexity

## See also
- [Cross-Validation](../machine-learning/cross-validation.md)
