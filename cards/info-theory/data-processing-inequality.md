---
id: info.data-processing-inequality
title: Data Processing Inequality
tags: [information-theory, dependence]
related: [info.mutual-information]
prereqs: [info.mutual-information]
---

# Data Processing Inequality

## Formula
\[
X \rightarrow Y \rightarrow Z \quad \Rightarrow \quad I(X;Z) \le I(X;Y)
\]

## Parameters
- \(X\to Y\to Z\): Markov chain (\(Z\) depends on \(X\) only through \(Y\))
- \(I(\cdot;\cdot)\): mutual information

## What it means
Processing data cannot increase the information it contains about the source.

## Key properties
- Equality holds if \(Z\) is a sufficient statistic of \(Y\) for \(X\)
- Applies to any (possibly randomized) processing

## Common gotchas
- Requires the Markov condition; arbitrary transformations can violate it.
- "Information" here is mutual information, not entropy.

## See also
- [Mutual Information](../info-theory/mutual-information.md)
