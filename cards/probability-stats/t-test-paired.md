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
