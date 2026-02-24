---
id: prob.mean
title: Mean (Expected Value)
tags: [probability, statistics, central-tendency]
related: [prob.expectation, prob.variance]
prereqs: [prob.expectation]
---

# Mean (Expected Value)

<div class="formula" markdown="1">
## Formula
\[
\mu = \mathbb{E}[X]
\]

\[
\bar x = \frac{1}{n}\sum_{i=1}^n x_i
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\): random variable
- \(x_i\): samples
- \(n\): number of samples

</div>
## What it means
Average value of a distribution or dataset.



## What it's used for
- Summarizing central tendency.
- Baseline predictor in regression.

## Key properties
- Linear: \(\mathbb{E}[aX+b]=a\mathbb{E}[X]+b\).
- Minimizes expected squared error.

## Common gotchas
- Sensitive to outliers.
- For heavy-tailed distributions, the mean may not exist.

## Example
For samples \([1, 2, 4]\), \(\bar x=(1+2+4)/3=2.333\).
