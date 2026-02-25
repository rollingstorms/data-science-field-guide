---
id: prob.variance
title: Variance
tags: [probability, statistics, dispersion]
related: [prob.expectation, prob.standard-deviation, prob.covariance]
prereqs: [prob.expectation]
---

# Variance

<div class="formula" markdown="1">
## Formula
\[
\operatorname{Var}(X) = \mathbb{E}\big[(X-\mu)^2\big] = \mathbb{E}[X^2] - \mu^2
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\): random variable
- \(\mu = \mathbb{E}[X]\): mean

</div>
## What it means
Measures the average squared deviation from the mean.



## What it's used for
- Measuring spread around the mean.
- Risk and uncertainty quantification.
## Key properties
- \(\operatorname{Var}(X)\ge 0\)
- \(\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X)\)
- \(\operatorname{Var}(X)=0\) iff \(X\) is almost surely constant

## Common gotchas
- Variance depends on squared units of \(X\).
- \(\mathbb{E}[X]^2\neq\mathbb{E}[X^2]\); don't drop the square.



## Example
For \(X\in\{0,1\}\) fair coin,
\(\operatorname{Var}(X)=0.25\).
## How to Compute (Pseudocode)
```text
Input: sample data (and any reference values needed by the statistic)
Output: statistic value

compute the summary quantities required by the formula (for example, mean, deviations, counts)
apply the statistic formula from the card
return the result
```

## Complexity
- Time: Typically \(O(n)\) for \(n\) samples for common one-pass or two-pass summary-statistic computations (sorting-based medians are \(O(n\log n)\) unless selection is used)
- Space: \(O(1)\) to \(O(n)\) depending on whether values must be stored/sorted
- Assumptions: Sample-statistic workflow shown; parameter-estimation and streaming/online algorithms can change constants and memory usage

## See also
- [Expectation](../probability-stats/expectation.md)
