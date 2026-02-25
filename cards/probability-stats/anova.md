---
id: stat.anova
title: ANOVA (Analysis of Variance)
tags: [statistics, inference, experimentation]
related: [stat.t-test-two-sample, stat.multiple-hypothesis-testing]
prereqs: [stat.t-test-two-sample]
---

# ANOVA (Analysis of Variance)

<div class="formula" markdown="1">
## Formula
\[
F = \frac{\text{between-group variance estimate}}{\text{within-group variance estimate}}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(F\): ANOVA test statistic

</div>
## What it means
ANOVA tests whether group means differ more than expected from within-group variability.

## What it's used for
- Comparing mean outcomes across 3+ groups.
- Experiment analysis and factor screening.
## Key properties
- One-way ANOVA generalizes the two-sample t-test to multiple groups.
- Significant ANOVA indicates at least one group differs, not which one.

## Common gotchas
- Multiple pairwise follow-ups need correction.
- Assumptions (independence, variance structure, residual behavior) matter.

## Example
Compare mean conversion across several landing page variants before running post-hoc comparisons.

## How to Compute (Pseudocode)
```text
Input: data, null hypothesis H0, test statistic T
Output: test statistic and p-value decision summary

compute the observed test statistic T_obs from the data
obtain the null distribution (analytic approximation or exact table, depending on the test)
compute the p-value from the null distribution and tail convention
compare p-value to alpha (if making a decision)
return T_obs and p-value
```

## Complexity
- Time: Depends on the specific test (summary-statistic computation is often linear in sample size; p-value computation may be constant-time with a CDF call or more expensive if resampling is used)
- Space: Depends on whether intermediate summaries or resampled/null distributions are materialized
- Assumptions: Test-specific assumptions (independence, variance structure, distributional assumptions) determine validity and exact computation details

## See also
- [P-Value](../probability-stats/p-value.md)
