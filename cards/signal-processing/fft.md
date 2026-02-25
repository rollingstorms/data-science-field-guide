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
## How to Compute (Pseudocode)
```text
Input: samples x[0..N-1] (N power of 2 for radix-2 FFT)
Output: DFT coefficients X[0..N-1]

if N == 1:
  return x

split x into even-indexed and odd-indexed samples
E <- FFT(even samples)
O <- FFT(odd samples)

for k from 0 to N/2 - 1:
  twiddle <- exp(-i * 2*pi*k / N) * O[k]
  X[k] <- E[k] + twiddle
  X[k + N/2] <- E[k] - twiddle

return X
```

## Complexity
- Time: \(O(N\log N)\) for radix-2 Cooley-Tukey FFT
- Space: \(O(N)\) to \(O(N\log N)\) depending on recursive vs in-place implementation
- Assumptions: \(N\) is the number of samples; complexity shown for radix-2 FFT (other FFT variants have similar asymptotic time with different constraints/constants)

## See also
- [Discrete Fourier Transform](../signal-processing/dft.md)
