---
id: stat.ab-testing
title: A/B Testing
tags: [statistics, experimentation, causal-inference]
related: [stat.power-analysis, stat.permutation-test]
prereqs: [stat.p-value]
---

# A/B Testing

<div class="formula" markdown="1">
## Formula
\[
\Delta = \hat{\theta}_B - \hat{\theta}_A
\]

</div>
## Plot
```plot
fn: 1/(1+exp(-10*(x-0.2)))
xmin: 0
xmax: 0.5
ymin: 0
ymax: 1.05
height: 280
title: Example test power vs uplift (illustrative)
```

<div class="parameters" markdown="1">
## Parameters
- \(\hat{\theta}_A,\hat{\theta}_B\): estimated metrics for control and treatment
- \(\Delta\): estimated uplift

</div>
## What it means
A/B testing compares a control and a treatment to estimate causal impact under random assignment.

## What it's used for
- Product experimentation and policy rollout decisions.
- Measuring uplift, guardrails, and tradeoffs.
## Key properties
- Randomization supports causal interpretation if experiment execution is sound.
- Primary metric, guardrails, and stopping rules should be defined before launch.

## Common gotchas
- Sample ratio mismatch, peeking, and multiple comparisons can invalidate inference.
- Metrics with heavy tails may need robust analysis choices.

## Example
Compare conversion rates of two landing pages with randomized traffic assignment and pre-registered metrics.

## How to Compute (Pseudocode)
```text
Input: randomized control/treatment data, primary metric, analysis plan
Output: estimated lift and inference summary

compute metric estimates for control and treatment groups
compute estimated uplift Delta = theta_hat_B - theta_hat_A
choose and run the planned inference method (for example z/t-test, bootstrap, or permutation)
report effect size, confidence interval, and/or p-value
return experiment summary
```

## Complexity
- Time: Typically \(O(n)\) to compute group summaries over \(n\) observations, plus the cost of the chosen inference method (resampling methods add repeated passes)
- Space: Depends on metric aggregation and whether resampled statistics/segments are stored
- Assumptions: Randomized assignment and pre-specified analysis plan; exact cost depends on metric complexity and inference method

## See also
- [P-Value](../probability-stats/p-value.md)
