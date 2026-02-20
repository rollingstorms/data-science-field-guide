---
id: ml.cohen-kappa
title: Cohen's Kappa
tags: [classification, evaluation]
related: [ml.confusion-matrix]
prereqs: [ml.confusion-matrix]
---

# Cohen's Kappa

## Formula
\[
\kappa = \frac{p_o - p_e}{1 - p_e}
\]

## Parameters
- \(p_o\): observed agreement
- \(p_e\): expected agreement by chance

## What it means
Agreement between two labelers/classifiers adjusted for chance.

## Key properties
- Range \([-1,1]\)
- \(\kappa=0\) means chance-level agreement

## Common gotchas
- Sensitive to label prevalence (the "kappa paradox").
- Different weighting schemes exist for ordinal labels.

## See also
- [Confusion Matrix](../ml-metrics/confusion-matrix.md)
