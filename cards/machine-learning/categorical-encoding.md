---
id: ml.categorical-encoding
title: Categorical Encoding
tags: [machine-learning, preprocessing, features]
related: [ml.feature-scaling, ml.data-leakage]
prereqs: []
---

# Categorical Encoding

<div class="formula" markdown="1">
## Formula
\[
\text{one-hot}(c_i) \in \{0,1\}^{K},\quad \sum_{j=1}^K \text{one-hot}(c_i)_j = 1
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(c_i\): category value
- \(K\): number of categories

</div>
## What it means
Converts categorical variables into numeric representations that models can use.

## What it's used for
- One-hot encoding for nominal categories.
- Ordinal encoding for ordered categories.
- Target/statistical encodings (with leakage controls).
## Key properties
- Encoding choice affects model behavior and dimensionality.
- High-cardinality categories often need grouping, hashing, or regularized target encoding.

## Common gotchas
- Target encoding must be computed out-of-fold to avoid leakage.
- Ordinal encoding is dangerous for unordered categories.

## Example
For a color feature {red, green, blue}, one-hot creates three binary columns.

## How to Compute (Pseudocode)
```text
Input: categorical feature values, encoding scheme
Output: encoded numeric representation

fit encoder on training data categories/statistics
if one-hot encoding:
  build category-to-column mapping
  emit a binary indicator vector per example
if ordinal encoding:
  map each category to an integer code
if target/statistical encoding:
  compute training-only category statistics (preferably out-of-fold)

apply the fitted encoder to validation/test data
```

## Complexity
- Time: Depends on the encoding scheme; one-hot/ordinal encoders are typically \(O(n)\) after building mappings, while target encodings add aggregation/CV overhead
- Space: Depends on output dimensionality (for one-hot, often \(O(nK)\) dense or sparse equivalent for \(K\) categories)
- Assumptions: \(n\) examples; complexity varies substantially with cardinality, sparse storage, and leakage-control strategy

## See also
- [Data Leakage](../machine-learning/data-leakage.md)
- [Machine Learning Pipeline](../machine-learning/machine-learning-pipeline.md)
