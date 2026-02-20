---
id: prob.total-probability
title: Law of Total Probability
tags: [probability]
related: [prob.bayes-rule]
prereqs: [prob.conditional-probability]
---

# Law of Total Probability

## Formula
\[
P(B) = \sum_i P(B\mid A_i)\,P(A_i)
\]

## Parameters
- \(\{A_i\}\): partition of the sample space
- \(P(A_i)>0\) and \(\sum_i P(A_i)=1\)

## What it means
Computes \(P(B)\) by conditioning on a partition of cases.

## Key properties
- Extends to integrals for continuous partitions
- Basis for Bayes' rule normalization

## Common gotchas
- The \(A_i\) must be mutually exclusive and exhaustive.
- Don't forget to include all cases in the partition.

## See also
- [Bayes' Rule](../probability-stats/bayes-rule.md)
