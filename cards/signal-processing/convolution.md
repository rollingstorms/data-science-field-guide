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
## How to Compute (Pseudocode)
```text
Input: discrete sequences x[0..N-1], h[0..M-1]
Output: linear convolution y[0..N+M-2]

initialize y[0..N+M-2] <- 0
for i from 0 to N-1:
  for j from 0 to M-1:
    y[i + j] <- y[i + j] + x[i] * h[j]

return y
```

## Complexity
- Time: \(O(NM)\) for direct discrete convolution
- Space: \(O(N+M)\) for the output (excluding input storage)
- Assumptions: \(N\) and \(M\) are sequence lengths; FFT-based convolution can reduce time to \(O(L\log L)\) for \(L \approx N+M\) with padding and transforms

## See also
- [Fourier Transform](../signal-processing/fourier-transform.md)
