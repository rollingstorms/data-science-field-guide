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

## How to Compute (Pseudocode)
```text
Input: set of hypotheses/p-values and a target error-rate criterion
Output: adjusted decisions or error-rate summary

collect p-values from the hypothesis family
apply the chosen multiple-testing/error-rate control procedure
report adjusted decision threshold(s), rejections, or error-rate summary
return results
```

## Complexity
- Time: Depends on the procedure; many standard methods are dominated by sorting (\(O(m\log m)\) for \(m\) hypotheses)
- Space: \(O(m)\) for p-values and adjusted decisions/ordering
- Assumptions: Hypotheses are treated as a specified family and the chosen procedure's assumptions determine validity

## See also
- [P-Value](../probability-stats/p-value.md)
