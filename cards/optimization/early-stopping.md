---
id: opt.early-stopping
title: Early Stopping
tags: [optimization, regularization, model-selection]
related: [opt.regularization]
prereqs: []
---

# Early Stopping

<div class="formula" markdown="1">
## Formula
\[
t^*=\arg\min_t \ \text{ValLoss}(t)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\text{ValLoss}(t)\): validation loss (or metric-based score) at step/epoch \(t\)
- \(t^*\): selected stopping time

</div>
## What it means
Stop training when validation performance stops improving, instead of continuing to minimize training loss.

## What it's used for
- Preventing overfitting.
- Saving training time and compute.

## Key properties
- Uses a held-out validation set.
- Often implemented with patience and best-checkpoint restoration.

## Common gotchas
- Validation metric noise can trigger premature stopping.
- Using the test set for stopping leaks information.

## Example
If validation loss does not improve for 5 epochs, stop and restore the best checkpoint.

## See also
- [Regularization (L1/L2)](../optimization/regularization.md)
- [Learning Rate Schedule](../optimization/learning-rate-schedule.md)
