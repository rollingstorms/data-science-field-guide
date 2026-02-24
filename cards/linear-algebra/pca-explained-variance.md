---
id: linalg.pca-explained-variance
title: PCA Explained Variance Ratio
tags: [linear-algebra, dimensionality-reduction, pca]
related: [linalg.pca, linalg.scree-plot]
prereqs: [linalg.pca]
---

# PCA Explained Variance Ratio

<div class="formula" markdown="1">
## Formula
\[
\mathrm{EVR}_k = \frac{\lambda_k}{\sum_{j=1}^{p}\lambda_j}
\]

</div>
## Plot
```plot
type: bars
xs: 1 | 2 | 3 | 4 | 5
ys: 0.55 | 0.22 | 0.11 | 0.07 | 0.05
xmin: 0.5
xmax: 5.5
ymin: 0
ymax: 0.6
height: 280
title: Example explained variance ratios
```

<div class="parameters" markdown="1">
## Parameters
- \(\lambda_k\): \(k\)-th eigenvalue of covariance matrix
- \(p\): number of features/components

</div>
## What it means
Explained variance ratio tells how much total variance is captured by each principal component.

## What it's used for
- Choosing the number of components in PCA.
- Communicating compression tradeoffs.
## Key properties
- Ratios sum to 1 across all components.
- Cumulative explained variance is often more useful than per-component values.

## Common gotchas
- Large variance is not always equal to task-relevant signal.
- Scaling features changes the covariance spectrum.

## Example
If the first two components explain 85% variance, a 2D projection may preserve much of the spread.

## See also
- [Principal Component Analysis (PCA)](../linear-algebra/pca.md)
