---
id: ml.linear-regression
title: Linear Regression
tags: [machine-learning, regression, supervised-learning]
related: [ml.ridge-regression, ml.lasso-regression, ml.r2]
prereqs: [linalg.least-squares, prob.correlation]
---

# Linear Regression

<div class="formula" markdown="1">
## Formula
\[
\hat{\beta} = (X^T X)^{-1} X^T y
\]

\[
\hat{y} = X\hat{\beta}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\): design matrix
- \(y\): target vector
- \(\hat{\beta}\): fitted coefficients

</div>
## What it means
Fits a linear relationship between features and a continuous target by minimizing squared error.

## What it's used for
- Baseline regression model.
- Interpretable effect estimates (with assumptions).
- Feature screening and trend modeling.
## Key properties
- Closed-form least-squares solution when \(X^TX\) is invertible.
- Coefficients depend on feature scaling and collinearity.

## Common gotchas
- Linear fit can underperform on nonlinear relationships.
- Extrapolation outside the observed range is risky.
- Outliers can strongly affect coefficients.

## Example
Fit house price as a linear combination of square footage, bedrooms, and age.

## See also
- [Least Squares](../linear-algebra/least-squares.md)
- [R²](../ml-metrics/r2.md)
