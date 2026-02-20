---
id: prob.mgf
title: Moment Generating Function
tags: [probability, distributions]
related: [prob.characteristic-function]
prereqs: [prob.expectation]
---

# Moment Generating Function

## Formula
\[
M_X(t) = \mathbb{E}[e^{tX}]
\]

## Parameters
- \(t\): real parameter
- \(X\): random variable

## What it means
Encodes all moments of \(X\) (when it exists) via derivatives at \(t=0\).

## Key properties
- \(M_X^{(k)}(0)=\mathbb{E}[X^k]\)
- If it exists in a neighborhood of 0, it uniquely determines the distribution

## Common gotchas
- MGF may not exist for heavy-tailed distributions.
- Use characteristic function when MGF diverges.

## See also
- [Characteristic Function](../probability-stats/characteristic-function.md)
