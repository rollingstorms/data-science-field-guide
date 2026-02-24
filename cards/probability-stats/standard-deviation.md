---
id: prob.standard-deviation
title: Standard Deviation
tags: [probability, statistics, dispersion]
related: [prob.variance, prob.z-score]
prereqs: [prob.variance]
---

# Standard Deviation

<div class="formula" markdown="1">
## Formula
\[
\sigma = \sqrt{\operatorname{Var}(X)}
\]

\[
s = \sqrt{\frac{1}{n-1}\sum_{i=1}^n (x_i-\bar x)^2}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\): random variable
- \(x_i\): samples
- \(\bar x\): sample mean
- \(n\): number of samples

</div>
## What it means
Typical distance of values from the mean.



## What it's used for
- Measuring spread in data.
- Standardizing values (z-scores).

## Key properties
- Same units as the data.
- \(\sigma \ge 0\); zero means all values are equal.

## Common gotchas
- Sample standard deviation uses \(n-1\) (Bessel's correction).
- Sensitive to outliers.

## Example
For samples \([1, 2, 4]\), \(s=1.528\).
