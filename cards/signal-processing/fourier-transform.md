---
id: signal.fourier-transform
title: Fourier Transform
tags: [signal-processing, frequency]
related: [signal.convolution, signal.dft]
prereqs: [signal.integral]
---

# Fourier Transform

## Formula
\[
X(\omega) = \int_{-\infty}^{\infty} x(t)\,e^{-i\omega t}\,dt
\]

## Parameters
- \(x(t)\): time-domain signal
- \(X(\omega)\): frequency-domain representation

## What it means
Decomposes a signal into its frequency components.

## Key properties
- Inverse transform reconstructs \(x(t)\)
- Convolution in time becomes multiplication in frequency

## Common gotchas
- Different sign and \(2\pi\) conventions exist.
- Requires integrability or distributional interpretation.

## See also
- [Convolution](../signal-processing/convolution.md)
