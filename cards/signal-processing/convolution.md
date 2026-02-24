---
id: signal.convolution
title: Convolution
tags: [signal-processing, linear-systems]
related: [signal.fourier-transform, signal.impulse-response]
prereqs: [signal.integral, signal.sum]
---

# Convolution

<div class="formula" markdown="1">
## Formula
\[
(f * g)(t) = \int_{-\infty}^{\infty} f(\tau)\,g(t-\tau)\,d\tau
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(f,g\): signals or functions
- \(t\): output variable

</div>
## What it means
Measures how one signal "slides" over another; for LTI systems, output is input convolved with impulse response.



## What it's used for
- Applying filters and system responses.
- Smoothing and feature extraction.
## Key properties
- Commutative: \(f*g = g*f\)
- Associative: \(f*(g*h)=(f*g)*h\)
- Convolution in time corresponds to multiplication in frequency

## Common gotchas
- Discrete-time convolution uses sums, not integrals.
- Boundary effects matter for finite signals.



## Example
For \(x=[1,1]\) and \(h=[1,2]\),
\((x*h)=[1,3,2]\).
## See also
- [Fourier Transform](../signal-processing/fourier-transform.md)
