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

## How to Compute (Pseudocode)
```text
Input: research question and statistical test setup
Output: null-hypothesis specification H0

define the parameter/contrast of interest
state H0 as a baseline/no-effect/no-difference model for that quantity
pair H0 with an alternative hypothesis H1 and a planned test statistic
return the hypothesis specification
```

## Complexity
- Time: Not an algorithmic computation; this is a study-design/specification step
- Space: \(O(1)\) for the formal hypothesis statement
- Assumptions: Hypothesis specification precedes data analysis and determines downstream test/p-value computations

## See also
- [P-Value](../probability-stats/p-value.md)
- [Statistical Power](../probability-stats/statistical-power.md)
