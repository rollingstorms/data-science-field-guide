---
id: stat.power-analysis
title: Power Analysis (Sample Size Planning)
tags: [statistics, experimentation, study-design]
related: [stat.statistical-power, stat.ab-testing]
prereqs: [stat.statistical-power]
---

# Power Analysis (Sample Size Planning)

<div class="formula" markdown="1">
## Formula
\[
\text{Power}=P(\text{reject }H_0\mid H_1\ \text{true})
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
title: Example target power vs effect size (illustrative)
```

<div class="parameters" markdown="1">
## Parameters
- Power depends on effect size, sample size, variance, significance level, and test choice.

</div>
## What it means
Power analysis estimates the sample size needed to detect a practically relevant effect with high probability.

## What it's used for
- A/B test planning and study design.
- Preventing underpowered experiments.
## Key properties
- Higher power usually requires larger sample size or larger effect size.
- Power should be planned using a minimum detectable effect (MDE).

## Common gotchas
- Post-hoc "observed power" is often not useful for interpretation.
- Wrong variance assumptions can badly miss sample-size targets.

## Example
Before launch, compute required traffic to detect a 2% relative lift with 80% power at \(\alpha=0.05\).

## See also
- [P-Value](../probability-stats/p-value.md)
