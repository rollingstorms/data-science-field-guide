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

## How to Compute (Pseudocode)
```text
Input: training loop, validation metric/loss, patience P
Output: stopping step and best checkpoint

best_score <- worst_possible
best_step <- 0
patience_counter <- 0
for each training epoch/step t:
  train for one step/epoch
  evaluate on validation set
  if validation improves:
    save checkpoint as best
    best_score <- current validation score
    best_step <- t
    patience_counter <- 0
  else:
    patience_counter <- patience_counter + 1
    if patience_counter >= P:
      stop training and restore best checkpoint
return best_step
```

## Complexity
- Time: Adds repeated validation evaluations during training; total cost depends on validation frequency and evaluation cost (training usually still dominates)
- Space: Requires storing at least one best-checkpoint copy (model-size dependent) plus validation metrics/history bookkeeping
- Assumptions: Patience-based early stopping shown; checkpointing strategy and validation cadence determine practical overhead

## See also
- [Regularization (L1/L2)](../optimization/regularization.md)
- [Learning Rate Schedule](../optimization/learning-rate-schedule.md)
