---
id: info.conditional-entropy
title: Conditional Entropy
tags: [information-theory, probability]
related: [info.entropy.shannon, info.mutual-information]
prereqs: [info.entropy.shannon]
---

# Conditional Entropy

## Formula
\[
H(X\mid Y) = -\sum_{x,y} p(x,y)\,\log p(x\mid y)
\]

## Parameters
- \(X,Y\): random variables
- \(p(x\mid y)\): conditional distribution

## What it means
Remaining uncertainty about \(X\) after observing \(Y\).

## Key properties
- \(H(X\mid Y) = H(X,Y) - H(Y)\)
- \(H(X\mid Y) \le H(X)\)

## Common gotchas
- Conditioning reduces entropy on average, but not necessarily for each \(y\).
- For continuous variables, use differential entropy.

## See also
- [Mutual Information](../info-theory/mutual-information.md)
