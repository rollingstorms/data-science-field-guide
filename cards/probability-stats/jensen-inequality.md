---
id: prob.jensen-inequality
title: Jensen's Inequality
tags: [probability, convexity]
related: [prob.expectation]
prereqs: [prob.expectation]
---

# Jensen's Inequality

## Formula
\[
\varphi(\mathbb{E}[X]) \le \mathbb{E}[\varphi(X)] \quad \text{for convex } \varphi
\]

## Parameters
- \(\varphi\): convex function
- \(X\): random variable

## What it means
Applying a convex function after expectation underestimates the expectation after applying the function.

## Key properties
- Reverses for concave \(\varphi\)
- Equality iff \(X\) is a.s. constant or \(\varphi\) is linear on support

## Common gotchas
- Direction depends on convex vs concave.
- Requires \(\mathbb{E}[|\varphi(X)|]\) to be finite.

## See also
- [Expectation](../probability-stats/expectation.md)
