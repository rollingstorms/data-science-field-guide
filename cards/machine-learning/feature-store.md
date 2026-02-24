---
id: ml.feature-store
title: Feature Store
tags: [machine-learning, production]
related: []
prereqs: []
---

# Feature Store

<div class="formula" markdown="1">
## Formula
\[
\text{feature view} = (\text{entity id}, \text{timestamp}) \mapsto \text{feature vector}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- Entity/time keys define point-in-time feature retrieval.

</div>
## What it means
A feature store manages reusable, versioned feature definitions and serving/training access patterns.

## What it's used for
- Reducing duplicated feature logic across teams.
- Point-in-time correct training data and online/offline consistency.
## Key properties
- Promotes feature lineage, reuse, and governance.
- Often separates offline backfill and online serving paths.

## Common gotchas
- Without point-in-time joins, historical training sets can leak future data.
- A feature store does not replace data quality monitoring.

## Example
Define a "30-day spend" feature once and reuse it in both batch training and online scoring systems.
