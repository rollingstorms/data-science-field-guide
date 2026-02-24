---
id: ml.cohen-kappa
title: Cohen's Kappa
tags: [classification, evaluation]
related: [ml.confusion-matrix]
prereqs: [ml.confusion-matrix]
---

# Cohen's Kappa

<div class="formula" markdown="1">
## Formula
\[
\kappa = \frac{p_o - p_e}{1 - p_e}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(p_o\): observed agreement
- \(p_e\): expected agreement by chance

</div>
## What it means
Agreement between two labelers/classifiers adjusted for chance.



## What it's used for
- Measuring agreement between two labelers/classifiers.
- Adjusting for chance agreement.
## Key properties
- Range \([-1,1]\)
- \(\kappa=0\) means chance-level agreement

## Common gotchas
- Sensitive to label prevalence (the "kappa paradox").
- Different weighting schemes exist for ordinal labels.



## Example
If \(p_o=0.8\) and \(p_e=0.5\),
\(\kappa=(0.8-0.5)/(1-0.5)=0.6\).
## See also
- [Confusion Matrix](../ml-metrics/confusion-matrix.md)
