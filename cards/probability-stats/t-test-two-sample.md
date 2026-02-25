---
id: prob.t-test-two-sample
title: Two-Sample t-Test (Welch)
tags: [probability, statistics, hypothesis-testing]
related: [prob.mean, prob.standard-deviation]
prereqs: [prob.mean, prob.standard-deviation]
---

# Two-Sample t-Test (Welch)

<div class="formula" markdown="1">
## Formula
\[
t = \frac{\bar x_1 - \bar x_2}{\sqrt{s_1^2/n_1 + s_2^2/n_2}}
\]

</div>
## Plot
```plot
fn: 1/(1+exp(-5*(x-0.5)))
xmin: 0
xmax: 1.5
ymin: 0
ymax: 1.05
height: 280
title: Example power curve for two-sample t-test (illustrative)
```

<div class="parameters" markdown="1">
## Parameters
- \(\bar x_1, \bar x_2\): sample means
- \(s_1, s_2\): sample standard deviations
- \(n_1, n_2\): sample sizes

</div>
## What it means
Tests whether two population means differ.



## What it's used for
- Comparing means from two independent groups.
- Works with unequal variances (Welch's t-test).

## Key properties
- Degrees of freedom use the Welch-Satterthwaite approximation.
- Does not assume equal variances.

## Common gotchas
- Assumes independent samples and roughly normal data in each group.
- If samples are paired, use a paired t-test instead.

## Example
If \(\bar x_1=5\), \(\bar x_2=3\), \(s_1=2\), \(s_2=1\), \(n_1=n_2=10\), then
\(t=(5-3)/\sqrt{4/10+1/10}=2.828\).

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

