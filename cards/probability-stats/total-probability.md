---
id: prob.total-probability
title: Law of Total Probability
tags: [probability]
related: [prob.bayes-rule]
prereqs: [prob.conditional-probability]
---

# Law of Total Probability

<div class="formula" markdown="1">
## Formula
\[
P(B) = \sum_i P(B\mid A_i)\,P(A_i)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\{A_i\}\): partition of the sample space
- \(P(A_i)>0\) and \(\sum_i P(A_i)=1\)

</div>
## What it means
Computes \(P(B)\) by conditioning on a partition of cases.



## What it's used for
- Decomposing probabilities by cases.
- Mixture models and diagnostic calculations.
## Key properties
- Extends to integrals for continuous partitions
- Basis for Bayes' rule normalization

## Common gotchas
- The \(A_i\) must be mutually exclusive and exhaustive.
- Don't forget to include all cases in the partition.



## Example
If \(P(B)=0.3\), \(P(A\mid B)=0.8\), \(P(A\mid
eg B)=0.2\),
then \(P(A)=0.8\cdot0.3+0.2\cdot0.7=0.38\).
## How to Compute (Pseudocode)
```text
Input: event probabilities / joint distribution entries
Output: requested probability quantity

identify the relevant events/variables and required joint/marginal terms
apply the probability identity in the card formula
check denominator/normalization terms are valid (nonzero when required)
return the computed probability
```

## Complexity
- Time: Typically \(O(1)\) for a single event computation once required probabilities are available; larger table-based calculations scale with table size
- Space: \(O(1)\) extra space for a single computation
- Assumptions: Probability terms (joint/marginals/conditionals) are already known or computed separately

## See also
- [Bayes' Rule](../probability-stats/bayes-rule.md)
