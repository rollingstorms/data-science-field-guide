---
id: signal.dft
title: Discrete Fourier Transform
tags: [signal-processing, frequency]
related: [signal.fft]
prereqs: [signal.sum]
---

# Discrete Fourier Transform

## Formula
\[
X_k = \sum_{n=0}^{N-1} x_n\,e^{-i 2\pi kn/N}
\]

## Parameters
- \(x_n\): discrete-time samples
- \(N\): number of samples
- \(k=0,\ldots,N-1\)

## What it means
Represents a finite sequence as a sum of complex sinusoids.

## Key properties
- Inverse DFT exists and is linear
- Assumes periodic extension of the sequence

## Common gotchas
- Frequency bins correspond to discrete grid \(k/N\).
- Windowing affects spectral leakage.

## See also
- [FFT](../signal-processing/fft.md)
