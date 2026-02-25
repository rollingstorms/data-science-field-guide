---
id: prob.z-score
title: Z-Score
tags: [probability, statistics, normalization]
related: [prob.mean, prob.standard-deviation]
prereqs: [prob.mean, prob.standard-deviation]
---

# Z-Score

<div class="formula" markdown="1">
## Formula
\[
z = \frac{x-\mu}{\sigma}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x\): value
- \(\mu\): mean
- \(\sigma\): standard deviation

</div>
## What it means
How many standard deviations \(x\) is from the mean.



## What it's used for
- Standardizing data for comparison.
- Outlier detection and normalization.

## Key properties
- Mean 0 and standard deviation 1 after standardization.
- Dimensionless.

## Common gotchas
- If \(\sigma=0\), z-score is undefined.
- Assumptions of normality are not required for the definition, only for probabilistic interpretations.

## Example
If \(x=80\), \(\mu=70\), \(\sigma=5\), then \(z=2\).

## How to Compute (Pseudocode)
```text
Input: value x, mean mu, standard deviation sigma
Output: z-score

if sigma == 0:
  return undefined
return (x - mu) / sigma
```

## Complexity
- Time: \(O(1)\) once \(\mu\) and \(\sigma\) are known
- Space: \(O(1)\)
- Assumptions: Computing \(\mu\) and \(\sigma\) from data is a separate step (often \(O(n)\))

