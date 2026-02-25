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
## Plot
```plot
fn: x^2
xmin: -3
xmax: 3
ymin: 0
ymax: 9.5
height: 280
title: Squared error vs residual r
```

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

## How to Compute (Pseudocode)
```text
Input: true values y[1..n], predictions y_hat[1..n]
Output: mse

sum_sq <- 0
for i from 1 to n:
  residual <- y[i] - y_hat[i]
  sum_sq <- sum_sq + residual^2

mse <- sum_sq / n
return mse
```

## Complexity
- Time: \(O(n)\)
- Space: \(O(1)\) additional space
- Assumptions: \(n\) is the number of paired predictions/targets

