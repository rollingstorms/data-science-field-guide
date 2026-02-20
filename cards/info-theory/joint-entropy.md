---
id: info.joint-entropy
title: Joint Entropy
tags: [information-theory, probability]
related: [info.entropy.shannon, info.conditional-entropy]
prereqs: [info.entropy.shannon]
---

# Joint Entropy

## Formula
\[
H(X,Y) = -\sum_{x,y} p(x,y)\,\log p(x,y)
\]

## Parameters
- \(X,Y\): random variables
- \(p(x,y)\): joint distribution

## What it means
Uncertainty of the pair \((X,Y)\) considered together.

## Key properties
- \(H(X,Y) = H(X) + H(Y\mid X)\)
- \(H(X,Y) \le H(X)+H(Y)\) with equality iff independent

## Common gotchas
- Joint entropy is not the same as sum of entropies unless independence holds.
- Continuous case uses differential entropy.

## See also
- [Conditional Entropy](../info-theory/conditional-entropy.md)
