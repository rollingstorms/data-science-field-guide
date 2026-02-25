---
id: ml.concept-drift
title: Concept Drift
tags: [machine-learning, production]
related: []
prereqs: []
---

# Concept Drift

<div class="formula" markdown="1">
## Formula
\[
P_t(Y\mid X) \ne P_{t'}(Y\mid X)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(P_t(Y\mid X)\): label relationship at time \(t\)

</div>
## What it means
Concept drift means the relationship between features and outcomes changes over time.

## What it's used for
- Monitoring and retraining predictive models.
- Detecting changing fraud/adversarial behavior or policy changes.
## Key properties
- More damaging than pure data drift because the model mapping itself becomes stale.
- Can be abrupt, gradual, recurring, or seasonal.

## Common gotchas
- Needs delayed labels to confirm in many systems.
- Performance drops can also come from pipeline bugs, not drift.

## Example
Fraudsters change tactics, so old transaction patterns no longer predict fraud as well.

## How to Compute (Pseudocode)
```text
Input: time-stamped model predictions/features and delayed labels (if available)
Output: concept-drift monitoring signals

monitor model performance over time windows when labels arrive
compare recent conditional behavior/performance to a baseline period
rule out obvious pipeline/data-quality issues
if sustained degradation suggests P(Y|X) changed:
  trigger investigation and retraining/model update workflow
```

## Complexity
- Time: Depends on monitoring cadence, window sizes, and metric computations (often periodic \(O(n_w)\) window scans plus alerting logic)
- Space: Depends on retained prediction/label history and summary dashboards
- Assumptions: Label-delayed monitoring workflow; true concept-drift confirmation often depends on business-specific feedback loops

