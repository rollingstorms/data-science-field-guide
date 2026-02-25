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

## How to Compute (Pseudocode)
```text
Input: index sequence i[1..L], embedding matrix E
Output: embedding vectors e[1..L]

for each position t:
  e[t] <- E[i[t]]   # row lookup
return e
```

## Complexity
- Time: \(O(Ld)\) to read/write \(L\) embedding vectors of dimension \(d\) (lookup itself is O(1) per row plus vector copy)
- Space: \(O(Vd)\) for the embedding matrix and \(O(Ld)\) for looked-up embeddings
- Assumptions: Vocabulary size \(V\); sparse updates/optimizer state can dominate training memory for large embeddings

## See also
- [Positional Encoding](../deep-learning/positional-encoding.md)
- [Tokenization](../nlp/tokenization.md)
