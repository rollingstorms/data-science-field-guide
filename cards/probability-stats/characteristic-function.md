---
id: prob.characteristic-function
title: Characteristic Function
tags: [probability, distributions]
related: [prob.mgf]
prereqs: [prob.expectation]
---

# Characteristic Function

## Formula
\[
\varphi_X(t) = \mathbb{E}[e^{itX}]
\]

## Parameters
- \(t\): real parameter
- \(i=\sqrt{-1}\)

## What it means
Fourier transform of the probability distribution of \(X\).

## Key properties
- Always exists
- Determines the distribution uniquely

## Common gotchas
- Don't confuse with MGF; \(i\) makes it bounded.
- Inversion formulas require regularity conditions.

## See also
- [Moment Generating Function](../probability-stats/mgf.md)
