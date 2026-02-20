---
id: prob.conditional-expectation
title: Conditional Expectation
tags: [probability, statistics]
related: [prob.expectation, prob.variance]
prereqs: [prob.expectation]
---

# Conditional Expectation

## Formula
\[
\mathbb{E}[X\mid Y] = \sum_x x\,p(x\mid Y) \quad\text{or}\quad \mathbb{E}[X\mid Y] = \int x\,p(x\mid Y)\,dx
\]

## Parameters
- \(X\): random variable
- \(Y\): conditioning variable
- \(p(x\mid Y)\): conditional distribution

## What it means
Best mean-squared predictor of \(X\) given \(Y\).

## Key properties
- Law of total expectation: \(\mathbb{E}[\mathbb{E}[X\mid Y]] = \mathbb{E}[X]\)
- \(\mathbb{E}[g(Y)X\mid Y]=g(Y)\,\mathbb{E}[X\mid Y]\)

## Common gotchas
- \(\mathbb{E}[X\mid Y]\) is a random variable, not a constant.
- Conditioning can reduce variance but not always pointwise.

## See also
- [Expectation](../probability-stats/expectation.md)
