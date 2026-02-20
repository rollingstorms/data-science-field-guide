---
id: info.mutual-information
title: Mutual Information
tags: [information-theory, probability, dependence]
related: [info.entropy.shannon, info.conditional-entropy, info.kl-divergence]
prereqs: [info.entropy.shannon]
---

# Mutual Information

## Formula
\[
I(X;Y) = \sum_{x,y} p(x,y)\,\log\frac{p(x,y)}{p(x)\,p(y)}
\]

## Parameters
- \(X,Y\): random variables
- \(p(x,y)\): joint distribution
- \(p(x), p(y)\): marginals

## What it means
How much knowing \(X\) reduces uncertainty about \(Y\) (and vice versa).

## Key properties
- \(I(X;Y) \ge 0\), equality iff \(X\) and \(Y\) are independent
- Symmetric: \(I(X;Y)=I(Y;X)\)
- Relation to entropy: \(I(X;Y)=H(X)-H(X\mid Y)\)

## Common gotchas
- Estimating MI from finite samples is biased and nontrivial.
- For continuous variables, MI uses densities and integrals.

## See also
- [Shannon Entropy](../info-theory/entropy-shannon.md)
- [KL Divergence](../info-theory/kl-divergence.md)
