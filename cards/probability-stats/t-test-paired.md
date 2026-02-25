---
id: prob.t-test-paired
title: Paired t-Test
tags: [probability, statistics, hypothesis-testing]
related: [prob.mean, prob.standard-deviation]
prereqs: [prob.mean, prob.standard-deviation]
---

# Paired t-Test

<div class="formula" markdown="1">
## Formula
\[
t = \frac{\bar d}{s_d/\sqrt{n}}
\]

</div>
## Plot
```plot
fn: 1/(1+exp(-5*(x-0.4)))
xmin: 0
xmax: 1.5
ymin: 0
ymax: 1.05
height: 280
title: Example power curve for paired t-test (illustrative)
```

<div class="parameters" markdown="1">
## Parameters
- \(d_i\): paired differences \(x_i - y_i\)
- \(\bar d\): mean of differences
- \(s_d\): standard deviation of differences
- \(n\): number of pairs

</div>
## What it means
Tests whether the mean difference between paired measurements is zero.



## What it's used for
- Before/after measurements on the same subjects.
- Controlling for subject-level variability.

## Key properties
- Under \(H_0\), \(t\) follows Student's t with \(n-1\) degrees of freedom.
- Equivalent to a one-sample t-test on differences.

## Common gotchas
- Requires meaningful pairing; otherwise use two-sample t-test.
- Differences should be roughly normal.

## Example
If differences are \([2, 0, 1, 3]\), then \(\bar d=1.5\), \(s_d=1.291\), \(n=4\),
so \(t=1.5/(1.291/2)=2.324\).

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

