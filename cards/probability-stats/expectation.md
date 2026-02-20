---
id: prob.expectation
title: Expectation
tags: [probability, statistics]
related: [prob.variance, prob.conditional-expectation]
prereqs: [prob.random-variable]
---

# Expectation

## Formula
\[
\mathbb{E}[X] = \sum_x x\,p(x) \quad\text{or}\quad \mathbb{E}[X] = \int x\,p(x)\,dx
\]

## Parameters
- \(X\): random variable
- \(p(x)\): pmf or pdf

## What it means
Long-run average value of \(X\).

## Key properties
- Linearity: \(\mathbb{E}[aX+bY]=a\mathbb{E}[X]+b\mathbb{E}[Y]\)
- \(\mathbb{E}[X]=\sum_x x\,P(X=x)\) for discrete

## Common gotchas
- Expectation may not exist if tails are too heavy.
- \(\mathbb{E}[g(X)]\neq g(\mathbb{E}[X])\) in general.

## See also
- [Variance](../probability-stats/variance.md)
