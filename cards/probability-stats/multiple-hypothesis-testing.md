---
id: stat.multiple-hypothesis-testing
title: Multiple Hypothesis Testing
tags: [statistics, hypothesis-testing, inference]
related: [stat.false-discovery-rate, stat.benjamini-hochberg]
prereqs: [stat.p-value]
---

# Multiple Hypothesis Testing

<div class="formula" markdown="1">
## Formula
\[
P(\text{at least one false positive}) = 1-(1-\alpha)^m
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\alpha\): per-test error rate
- \(m\): number of tests

</div>
## What it means
Running many tests inflates false positives unless you control a family-wise or discovery-based error criterion.

## What it's used for
- Feature screening, genomics, online experiments, and post-hoc comparisons.
## Key properties
- FWER controls probability of any false positive; FDR controls expected false discovery proportion.
- Correction choice depends on decision costs.

## Common gotchas
- Uncorrected p-values across many slices are misleading.
- Correlated tests can affect exact guarantees of some procedures.

## Example
If you test 100 unrelated features at \(\alpha=0.05\), several "significant" results may appear by chance.

## See also
- [P-Value](../probability-stats/p-value.md)
