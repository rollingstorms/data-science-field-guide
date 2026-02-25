---
id: ml.rmse
title: Root Mean Squared Error (RMSE)
tags: [ml, metrics, regression]
related: [ml.mse, ml.mae, ml.r2]
prereqs: [ml.mse]
---

# Root Mean Squared Error (RMSE)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{RMSE} = \sqrt{\frac{1}{n}\sum_{i=1}^n (y_i-\hat y_i)^2}
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
title: Root squared error for a single residual (|r|)
```

<div class="parameters" markdown="1">
## Parameters
- \(y_i\): true value
- \(\hat y_i\): prediction
- \(n\): number of samples

</div>

## What it means
Typical prediction error in the same units as the target.



## What it's used for
- Interpretable regression error metric.
- Comparing models on the same target scale.

## Key properties
- \(\mathrm{RMSE} = \sqrt{\mathrm{MSE}}\).
- More sensitive to large errors than MAE.

## Common gotchas
- Still sensitive to outliers.
- Not scale-free; avoid comparing across targets.

## Example
If \(\mathrm{MSE}=1.667\), then \(\mathrm{RMSE}=1.291\).

## How to Compute (Pseudocode)
```text
Input: true values y[1..n], predictions y_hat[1..n]
Output: rmse

sum_sq <- 0
for i from 1 to n:
  residual <- y[i] - y_hat[i]
  sum_sq <- sum_sq + residual^2

mse <- sum_sq / n
rmse <- sqrt(mse)
return rmse
```

## Complexity
- Time: \(O(n)\)
- Space: \(O(1)\) additional space
- Assumptions: \(n\) is the number of paired predictions/targets

