---
id: stat.null-hypothesis
title: Null Hypothesis
tags: [statistics, hypothesis-testing]
related: [stat.p-value, stat.type-i-type-ii-errors]
prereqs: []
---

# Null Hypothesis

<div class="formula" markdown="1">
## Formula
\[
H_0: \theta = \theta_0
\quad \text{(example form)}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(H_0\): baseline/default hypothesis
- \(\theta\): parameter of interest
- \(\theta_0\): hypothesized value

</div>
## What it means
The null hypothesis is the reference claim tested against the observed data.

## What it's used for
- Formal hypothesis tests.
- Defining p-values and rejection thresholds.

## Key properties
- Chosen before seeing results in principled analyses.
- Often represents "no effect" or a baseline model.

## Common gotchas
- Failing to reject \(H_0\) is not proof that \(H_0\) is true.
- Poorly chosen nulls can make tests uninformative.

## Example
In an A/B test, \(H_0\) may state that the two conversion rates are equal.

## See also
- [P-Value](../probability-stats/p-value.md)
- [Statistical Power](../probability-stats/statistical-power.md)
