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

## See also
- [Data Leakage](../machine-learning/data-leakage.md)
- [Machine Learning Pipeline](../machine-learning/machine-learning-pipeline.md)
