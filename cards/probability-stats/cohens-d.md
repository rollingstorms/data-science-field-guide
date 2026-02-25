---
id: stat.cohens-d
title: Cohen's d (Effect Size)
tags: [statistics, effect-size, inference]
related: [stat.t-test-two-sample, stat.power-analysis]
prereqs: [stat.t-test-two-sample]
---

# Cohen's d (Effect Size)

<div class="formula" markdown="1">
## Formula
\[
 d = \frac{\bar x_1-\bar x_2}{s_p}
\]

\[
 s_p = \sqrt{\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\bar x_1,\bar x_2\): group means
- \(s_p\): pooled standard deviation

</div>
## What it means
Cohen's d standardizes the difference between two means to express practical effect size.

## What it's used for
- Comparing effect magnitude across studies or metrics.
- Complementing p-values in experiments.
## Key properties
- Scale-free interpretation of mean difference.
- Useful for power analysis and sample size planning.

## Common gotchas
- Heuristic labels (small/medium/large) are context-dependent.
- Use paired or unequal-variance variants when appropriate.

## Example
A mean uplift of 2 points with pooled SD 10 gives \(d=0.2\), a small standardized effect.

## How to Compute (Pseudocode)
```text
Input: two sample groups (or summary stats)
Output: Cohen's d effect size

compute group means and standard deviations
compute pooled standard deviation (or the variant-specific denominator)
return standardized mean difference d
```

## Complexity
- Time: Typically \(O(n)\) to compute summary statistics from raw data (or \(O(1)\) from provided summaries)
- Space: \(O(1)\) extra space for streaming summary computations
- Assumptions: Exact formula depends on independent/paired design and pooled vs unpooled standardization choice

## See also
- [P-Value](../probability-stats/p-value.md)
