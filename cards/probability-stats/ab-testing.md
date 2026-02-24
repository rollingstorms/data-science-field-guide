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
- \(\hat{	heta}_A,\hat{	heta}_B\): estimated metrics for control and treatment
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

## See also
- [P-Value](../probability-stats/p-value.md)
