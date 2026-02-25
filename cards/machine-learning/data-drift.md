---
id: ml.data-drift
title: Data Drift
tags: [machine-learning, production]
related: []
prereqs: []
---

# Data Drift

<div class="formula" markdown="1">
## Formula
\[
P_t(X) \ne P_{t'}(X)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(P_t(X)\): feature distribution at time \(t\)

</div>
## What it means
Data drift means the input feature distribution changes over time relative to training or baseline periods.

## What it's used for
- Monitoring production pipelines and retraining triggers.
- Investigating drops in model performance.
## Key properties
- Can occur without label changes.
- Population, covariate, or schema shifts are common subtypes in practice.

## Common gotchas
- Pure distribution shift metrics do not prove business impact.
- Seasonality can look like drift unless baselines are contextual.

## Example
A payments model sees a new merchant mix after expansion into a new country, shifting transaction features.

## How to Compute (Pseudocode)
```text
Input: baseline feature distribution and recent production feature data
Output: drift scores/alerts

for each monitored feature:
  compute a drift statistic between baseline and recent windows
    (for example PSI, KS statistic, histogram distance)
compare drift statistics to alert thresholds
aggregate alerts and route for investigation/retraining decisions
```

## Complexity
- Time: Typically linear in the number of monitored records/features for histogram/statistic updates, plus metric-specific costs
- Space: Depends on retained baselines, histograms, and monitoring windows (often summary-statistics sized)
- Assumptions: Exact complexity depends on drift metric choice, binning strategy, and monitoring frequency

