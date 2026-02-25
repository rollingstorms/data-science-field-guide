---
id: signal.dft
title: Discrete Fourier Transform
tags: [signal-processing, frequency]
related: [signal.fft]
prereqs: [signal.sum]
---

# Discrete Fourier Transform

<div class="formula" markdown="1">
## Formula
\[
X_k = \sum_{n=0}^{N-1} x_n\,e^{-i 2\pi kn/N}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x_n\): discrete-time samples
- \(N\): number of samples
- \(k=0,\ldots,N-1\)

</div>
## What it means
Represents a finite sequence as a sum of complex sinusoids.



## What it's used for
- Analyzing discrete signals in the frequency domain.
- Computing spectra for finite sequences.
## Key properties
- Inverse DFT exists and is linear
- Assumes periodic extension of the sequence

## Common gotchas
- Frequency bins correspond to discrete grid \(k/N\).
- Windowing affects spectral leakage.



## Example
For \(x=[1,1,1,1]\), the DFT has \(X_0=4\) and \(X_k=0\) for \(k>0\).
## How to Compute (Pseudocode)
```text
Input: samples x[0..N-1]
Output: DFT coefficients X[0..N-1]

for k from 0 to N-1:
  X[k] <- 0
  for n from 0 to N-1:
    X[k] <- X[k] + x[n] * exp(-i * 2*pi*k*n / N)

return X
```

## Complexity
- Time: \(O(N^2)\) for the direct DFT sum
- Space: \(O(N)\) to store the output coefficients (excluding input storage)
- Assumptions: \(N\) is the number of samples; direct computation (not FFT)

## See also
- [FFT](../signal-processing/fft.md)
