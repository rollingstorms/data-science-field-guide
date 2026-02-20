---
id: signal.sampling-theorem
title: Nyquist-Shannon Sampling Theorem
tags: [signal-processing, sampling]
related: [signal.aliasing]
prereqs: [signal.fourier-transform]
---

# Nyquist-Shannon Sampling Theorem

## Formula
\[
\text{If } f_s \ge 2B,\quad x(t)=\sum_{n=-\infty}^{\infty} x(nT)\,\operatorname{sinc}\left(\frac{t-nT}{T}\right)
\]

## Parameters
- \(B\): signal bandwidth (Hz)
- \(f_s=1/T\): sampling frequency

## What it means
Bandlimited signals can be perfectly reconstructed from uniform samples.

## Key properties
- Nyquist rate is \(2B\)
- Reconstruction uses sinc interpolation

## Common gotchas
- Bandlimiting is an assumption; practical signals need anti-alias filters.
- Sampling below Nyquist causes irreversible aliasing.

## See also
- [Aliasing](../signal-processing/aliasing.md)
