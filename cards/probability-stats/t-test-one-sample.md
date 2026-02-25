---
id: prob.t-test-one-sample
title: One-Sample t-Test
tags: [probability, statistics, hypothesis-testing]
related: [prob.mean, prob.standard-deviation]
prereqs: [prob.mean, prob.standard-deviation]
---

# One-Sample t-Test

<div class="formula" markdown="1">
## Formula
\[
t = \frac{\bar x - \mu_0}{s/\sqrt{n}}
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
title: Example power curve for one-sample t-test (illustrative)
```

<div class="parameters" markdown="1">
## Parameters
- \(\bar x\): sample mean
- \(\mu_0\): hypothesized mean
- \(s\): sample standard deviation
- \(n\): sample size

</div>
## What it means
Tests whether the population mean differs from \(\mu_0\).



## What it's used for
- Hypothesis testing of a single mean.
- Small-sample inference when variance is unknown.

## Key properties
- Under \(H_0\), \(t\) follows Student's t with \(n-1\) degrees of freedom.
- Two-sided or one-sided alternatives are possible.

## Common gotchas
- Assumes independent samples and roughly normal data.
- Not robust to heavy tails or strong outliers.

## Example
If \(\bar x=52\), \(\mu_0=50\), \(s=6\), \(n=9\), then \(t=(52-50)/(6/3)=1\).

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

