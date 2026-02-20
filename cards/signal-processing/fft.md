---
id: signal.fft
title: Fast Fourier Transform
tags: [signal-processing, algorithms]
related: [signal.dft]
prereqs: [signal.dft]
---

# Fast Fourier Transform

## Formula
\[
X_k = \sum_{n=0}^{N-1} x_n\,e^{-i 2\pi kn/N}
\]

## Parameters
- \(x_n\): discrete-time samples
- \(N\): number of samples

## What it means
Algorithmic family that computes the DFT in \(O(N\log N)\) time.

## Key properties
- Cooley-Tukey is the most common FFT
- Requires no approximation of the DFT values

## Common gotchas
- Performance depends on \(N\) factorization (powers of two are fastest).
- Zero-padding changes interpolation, not the underlying signal content.

## See also
- [Discrete Fourier Transform](../signal-processing/dft.md)
