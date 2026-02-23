---
id: dl.cross-attention
title: Cross-Attention
tags: [deep-learning, transformers, nlp]
related: [dl.attention, dl.self-attention]
prereqs: [dl.attention]
---

# Cross-Attention

<div class="formula" markdown="1">
## Formula
\[
Q = X_{q} W_{Q},\quad K = X_{c} W_{K},\quad V = X_{c} W_{V}
\]
\[
\operatorname{CrossAttn}(X_{q},X_{c})=\operatorname{softmax}\!\left(\frac{QK^\top}{\sqrt{d_{k}}}\right)V
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X_{q}\): query-side representations (e.g., decoder tokens)
- \(X_{c}\): context/source representations (e.g., encoder outputs)
- \(Q\) from \(X_{q}\), \(K,V\) from \(X_{c}\)

</div>
## What it means
Cross-attention lets one sequence (or modality) read information from another sequence/modality.

## What it's used for
- Encoder-decoder transformers (translation, summarization).
- Multimodal models (text attending to image/audio features).

## Key properties
- Output length follows the query sequence length.
- Keys/values provide the memory being retrieved from.

## Common gotchas
- Easy to mix up self-attention vs cross-attention by where \(Q\) and \(K,V\) come from.
- Masking rules differ from self-attention depending on the task.

## Example
In machine translation, decoder token states query encoder outputs via cross-attention to condition on the source sentence.

## See also
- [Attention](../deep-learning/attention.md)
- [Self-Attention](../deep-learning/self-attention.md)
