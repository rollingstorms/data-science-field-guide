---
id: signal.fft
title: Fast Fourier Transform
tags: [signal-processing, algorithms]
related: [signal.dft]
prereqs: [signal.dft]
---

# Fast Fourier Transform

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

</div>
## What it means
Algorithmic family that computes the DFT in \(O(N\log N)\) time.



## What it's used for
- Fast computation of the DFT.
- Real-time spectral analysis.
## Key properties
- Cooley-Tukey is the most common FFT
- Requires no approximation of the DFT values

## Common gotchas
- Performance depends on \(N\) factorization (powers of two are fastest).
- Zero-padding changes interpolation, not the underlying signal content.



## Example
An 8-point FFT computes the same DFT values as the direct formula
with \(O(N\log N)\) work.
## See also
- [Discrete Fourier Transform](../signal-processing/dft.md)
