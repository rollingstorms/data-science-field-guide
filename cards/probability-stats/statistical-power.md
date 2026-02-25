---
id: stat.statistical-power
title: Statistical Power
tags: [statistics, hypothesis-testing]
related: [stat.type-i-type-ii-errors]
prereqs: []
---

# Statistical Power

<div class="formula" markdown="1">
## Formula
\[
\text{Power}=P(\text{reject } H_0 \mid H_1 \text{ is true}) = 1-\beta
\]

</div>
## Plot
```plot
fn: 1/(1+exp(-4*(x-0.5)))
xmin: 0
xmax: 1.5
ymin: 0
ymax: 1.05
height: 280
title: Example power curve vs effect size (illustrative)
```

<div class="parameters" markdown="1">
## Parameters
- \(H_0\): null hypothesis
- \(H_1\): alternative hypothesis
- \(\beta\): Type II error probability

</div>
## What it means
Power is the probability a test detects a real effect (i.e., correctly rejects \(H_0\) when the alternative is true).

## What it's used for
- Sample-size planning.
- Designing experiments with adequate sensitivity.

## Key properties
- Increases with larger effect size, larger sample size, and lower noise.
- Depends on significance level and test choice.

## Common gotchas
- Low power increases false negatives and unstable effect estimates.
- Post-hoc "observed power" is often not very informative.

## Example
Before an experiment, compute sample size needed to achieve 80% power for a target effect size.

## How to Compute (Pseudocode)
```text
Input: test family, significance level alpha, effect size assumptions, variance assumptions, candidate sample size(s)
Output: power estimate(s) or required sample size

choose the target test and alternative-effect scenario
for each candidate sample size (or solve directly if formula exists):
  compute the test's power under the assumed effect/variance model
select the smallest sample size meeting target power (for planning) or report power curve
return power/sample-size result
```

## Complexity
- Time: Depends on the test and whether power is computed analytically or by simulation; grid-search planning scales with the number of candidate sample sizes checked
- Space: \(O(1)\) to \(O(g)\) for a grid of \(g\) candidate sizes/effect scenarios
- Assumptions: Model assumptions and effect-size inputs dominate validity; simulation-based power adds Monte Carlo cost

## See also
- [Type I and Type II Errors](../probability-stats/type-i-type-ii-errors.md)
- [Confidence Interval](../probability-stats/confidence-interval.md)
