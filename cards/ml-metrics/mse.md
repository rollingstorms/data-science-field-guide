---
id: ml.mse
title: Mean Squared Error (MSE)
tags: [ml, metrics, regression]
related: [ml.rmse, ml.mae, ml.r2]
prereqs: []
---

# Mean Squared Error (MSE)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{MSE} = \frac{1}{n}\sum_{i=1}^n (y_i-\hat y_i)^2
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(y_i\): true value
- \(\hat y_i\): prediction
- \(n\): number of samples

</div>
## What it means
Average squared prediction error.



## What it's used for
- Regression model evaluation and training loss.
- Penalizing large errors more than small ones.

## Key properties
- Nonnegative; 0 means perfect prediction.
- Sensitive to outliers due to squaring.

## Common gotchas
- Units are squared; compare carefully across scales.
- Not robust to heavy-tailed noise.

## Example
If errors are \([-1, 2, 0]\),
\(\mathrm{MSE}=(1+4+0)/3=1.667\).
