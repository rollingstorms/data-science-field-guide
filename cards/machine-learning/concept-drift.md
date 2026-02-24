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
