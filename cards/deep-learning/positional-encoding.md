---
id: dl.positional-encoding
title: Positional Encoding
tags: [deep-learning, transformers, sequence-modeling]
related: [dl.transformer, dl.embedding]
prereqs: [dl.transformer]
---

# Positional Encoding

<div class="formula" markdown="1">
## Formula
\[
\mathrm{PE}(pos,2i)=\sin\!\left(\frac{pos}{10000^{2i/d}}\right),\quad
\mathrm{PE}(pos,2i+1)=\cos\!\left(\frac{pos}{10000^{2i/d}}\right)
\]

\[
X_{\text{in}} = E + \mathrm{PE}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(pos\): token position
- \(i\): feature index
- \(d\): model dimension
- \(E\): token embeddings

</div>
## What it means
Adds position information to token embeddings so attention can use order.

## What it's used for
- Transformer inputs in text and other sequences.
- Absolute or relative position representations.

## Key properties
- Can be fixed (sinusoidal) or learned.
- Relative schemes often improve long-context behavior.

## Common gotchas
- Position indexing and masking must align.
- Extrapolation behavior depends on positional encoding type.

## Example
Two identical tokens at different positions get different input vectors after adding positional encodings.

## How to Compute (Pseudocode)
```text
Input: token embeddings E[positions], positional-encoding scheme
Output: position-aware inputs X_in

compute positional vectors PE for each position (fixed sinusoidal or learned lookup)
X_in <- E + PE
return X_in
```

## Complexity
- Time: Typically \(O(Ld)\) to generate/lookup and add positional encodings for sequence length \(L\) and model dimension \(d\)
- Space: \(O(Ld)\) for position encodings (or \(O(d)\) if generated on the fly per position) plus outputs
- Assumptions: Absolute positional encodings shown; relative position schemes alter computation and memory patterns in attention layers

## See also
- [Transformer](../deep-learning/transformer.md)
- [Embedding](../deep-learning/embedding.md)
