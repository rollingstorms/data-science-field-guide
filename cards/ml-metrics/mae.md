---
id: ml.mae
title: Mean Absolute Error (MAE)
tags: [ml, metrics, regression]
related: [ml.mse, ml.rmse]
prereqs: []
---

# Mean Absolute Error (MAE)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{MAE} = \frac{1}{n}\sum_{i=1}^n |y_i-\hat y_i|
\]

</div>
## Plot
```plot
fn: abs(x)
xmin: -3
xmax: 3
ymin: 0
ymax: 3.2
height: 280
title: Absolute error vs residual r
```

<div class="parameters" markdown="1">
## Parameters
- \(y_i\): true value
- \(\hat y_i\): prediction
- \(n\): number of samples

</div>
## What it means
Average absolute prediction error.



## What it's used for
- Robust regression error metric.
- Comparing models when outliers should not dominate.

## Key properties
- Same units as the target.
- Less sensitive to outliers than MSE/RMSE.

## Common gotchas
- Absolute value makes gradients nondifferentiable at 0 (subgradient works).
- Can under-penalize large errors vs MSE.

## Example
If errors are \([-1, 2, 0]\),
\(\mathrm{MAE}=(1+2+0)/3=1.000\).

## How to Compute (Pseudocode)
```text
Input: true values y[1..n], predictions y_hat[1..n]
Output: MAE

sum_abs <- 0
for i from 1 to n:
  sum_abs <- sum_abs + abs(y[i] - y_hat[i])
return sum_abs / n
```

## Complexity
- Time: \(O(n)\)
- Space: \(O(1)\) extra space
- Assumptions: \(n\) paired predictions/targets; prediction-generation cost is excluded

