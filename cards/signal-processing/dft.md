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
## See also
- [FFT](../signal-processing/fft.md)
