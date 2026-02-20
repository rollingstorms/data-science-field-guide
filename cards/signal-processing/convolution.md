---
id: signal.convolution
title: Convolution
tags: [signal-processing, linear-systems]
related: [signal.fourier-transform, signal.impulse-response]
prereqs: [signal.integral, signal.sum]
---

# Convolution

## Formula
\[
(f * g)(t) = \int_{-\infty}^{\infty} f(\tau)\,g(t-\tau)\,d\tau
\]

## Parameters
- \(f,g\): signals or functions
- \(t\): output variable

## What it means
Measures how one signal "slides" over another; for LTI systems, output is input convolved with impulse response.

## Key properties
- Commutative: \(f*g = g*f\)
- Associative: \(f*(g*h)=(f*g)*h\)
- Convolution in time corresponds to multiplication in frequency

## Common gotchas
- Discrete-time convolution uses sums, not integrals.
- Boundary effects matter for finite signals.

## See also
- [Fourier Transform](../signal-processing/fourier-transform.md)
