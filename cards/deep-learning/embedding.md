---
id: dl.embedding
title: Embedding
tags: [deep-learning, representation-learning, nlp]
related: [nlp.tokenization, dl.positional-encoding]
prereqs: []
---

# Embedding

<div class="formula" markdown="1">
## Formula
\[
e_i = E[i] \in \mathbb{R}^d
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(E\in\mathbb{R}^{V\times d}\): embedding matrix
- \(i\): token/item index
- \(e_i\): dense vector representation

</div>
## What it means
An embedding maps a discrete ID (token, item, node) to a learned dense vector.

## What it's used for
- Token representations in language models.
- Categorical feature representations in ML systems.

## Key properties
- Similar entities can learn nearby vectors.
- Usually trained jointly with the task model.

## Common gotchas
- OOV/unknown handling depends on tokenization scheme.
- Vocabulary size heavily affects memory cost.

## Example
A vocabulary of size \(50{,}000\) with dimension \(768\) uses an embedding matrix \(E\in\mathbb{R}^{50000\times768}\).

## See also
- [Positional Encoding](../deep-learning/positional-encoding.md)
- [Tokenization](../nlp/tokenization.md)
