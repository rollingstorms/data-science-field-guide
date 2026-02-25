---
id: linalg.scree-plot
title: Scree Plot
tags: [linear-algebra, dimensionality-reduction, visualization]
related: [linalg.pca, linalg.pca-explained-variance]
prereqs: [linalg.pca-explained-variance]
---

# Scree Plot

<div class="formula" markdown="1">
## Formula
\[
\text{scree plot: } k \mapsto \lambda_k \quad \text{or} \quad k \mapsto \sum_{j=1}^{k}\mathrm{EVR}_j
\]

</div>
## Plot
```plot
type: bars
xs: 1 | 2 | 3 | 4 | 5 | 6
ys: 0.42 | 0.24 | 0.14 | 0.09 | 0.06 | 0.05
xmin: 0.5
xmax: 6.5
ymin: 0
ymax: 0.48
height: 280
title: Example scree plot (explained variance by component)
```

<div class="parameters" markdown="1">
## Parameters
- \(k\): component index
- \(\lambda_k\): ordered eigenvalue

</div>
## What it means
A scree plot visualizes component importance to help choose a truncation point in PCA/factor methods.

## What it's used for
- Selecting a practical number of principal components.
- Explaining diminishing returns from additional components.
## Key properties
- Often look for an "elbow" where gains flatten.
- Can plot eigenvalues or cumulative explained variance.

## Common gotchas
- Elbows can be subjective.
- Task performance should still validate the dimensionality choice.

## Example
If cumulative variance jumps to 95% by component 20 and then flattens, 20 is a reasonable candidate.

## How to Compute (Pseudocode)
```text
Input: ordered eigenvalues or explained-variance ratios
Output: scree plot data points (and optionally cumulative curve)

for k from 1 to K:
  y[k] <- eigenvalue[k] or explained_variance_ratio[k]
  cumulative[k] <- sum_{j=1..k} explained_variance_ratio[j]   # optional
plot k vs y (and/or cumulative[k])
return plot data
```

## Complexity
- Time: \(O(K)\) once eigenvalues/EVR values are available
- Space: \(O(K)\) for plot vectors
- Assumptions: Cost of PCA/eigendecomposition is excluded; this card covers postprocessing/visualization preparation

## See also
- [PCA Explained Variance Ratio](../linear-algebra/pca-explained-variance.md)
