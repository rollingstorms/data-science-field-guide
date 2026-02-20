---
id: signal.aliasing
title: Aliasing
tags: [signal-processing, sampling]
related: [signal.sampling-theorem]
prereqs: [signal.sampling-theorem]
---

# Aliasing

## Formula
\[
\omega_{\text{alias}} = \omega + 2\pi k\quad (k\in\mathbb{Z})
\]

## Parameters
- \(\omega\): angular frequency
- \(k\): integer shift due to sampling

## What it means
High-frequency components become indistinguishable from lower frequencies after sampling.

## Key properties
- Caused by sampling below the Nyquist rate
- Spectra repeat every \(2\pi\) in discrete time

## Common gotchas
- Anti-alias filtering is required before sampling.
- Aliasing can appear even with noisy measurements if bandwidth is not controlled.

## See also
- [Nyquist-Shannon Sampling Theorem](../signal-processing/sampling-theorem.md)
