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
