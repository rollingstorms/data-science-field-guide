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

## See also
- [P-Value](../probability-stats/p-value.md)
