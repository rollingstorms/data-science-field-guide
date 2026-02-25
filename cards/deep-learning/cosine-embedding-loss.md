---
id: dl.cosine-embedding-loss
title: Cosine Embedding Loss (Metric Learning)
tags: [deep-learning, metric-learning, embeddings]
related: [dl.embedding]
prereqs: [dl.embedding]
---

# Cosine Embedding Loss (Metric Learning)

<div class="formula" markdown="1">
## Formula
\[
\cos(x_i,x_j)=\frac{x_i^T x_j}{\|x_i\|\|x_j\|}
\]

\[
\hat{x}=\frac{x}{\|x\|}
\]

\[
L=
\begin{cases}
1-\cos(x_i,x_j), & y_{ij}=1 \\
\max\!\bigl(0,\cos(x_i,x_j)-m\bigr), & y_{ij}=0
\end{cases}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x_i,x_j\): embeddings
- \(\hat{x}\): L2-normalized embedding
- \(y_{ij}\in\{0,1\}\): pair label (similar / dissimilar)
- \(m\): margin for dissimilar pairs

</div>
## What it means
Pulls similar pairs to have high cosine similarity and pushes dissimilar pairs below a margin, often after L2 normalization.

## What it's used for
- Metric learning and representation learning.
- Face/product/text embedding training with pair labels.

## Key properties
- With L2 normalization, cosine similarity equals dot product of unit vectors
- Often used as a pairwise alternative to contrastive/triplet/InfoNCE losses

## Common gotchas
- "Normalize" usually means L2-normalize embeddings, not batch normalization.
- Negative pair sampling quality strongly affects learning.
- Margin \(m\) choice changes how hard negatives are penalized.

## Example
For a similar pair with \(\cos(x_i,x_j)=0.9\), the loss term is \(0.1\).

## How to Compute (Pseudocode)
```text
Input: embedding pairs (x_i, x_j), pair labels y_ij, margin m
Output: average cosine embedding loss

for each pair:
  compute cosine similarity c = cos(x_i, x_j)
  if y_ij == 1:
    loss_pair <- 1 - c
  else:
    loss_pair <- max(0, c - m)
average all pair losses
return loss
```

## Complexity
- Time: \(O(Pd)\) for \(P\) embedding pairs of dimension \(d\) (assuming cosine similarities are computed directly)
- Space: \(O(1)\) extra accumulation space beyond storing the pairs/embeddings (or \(O(P)\) if storing all pair losses)
- Assumptions: Pairwise loss computation shown; training cost also includes encoder forward/backward passes that produce the embeddings

## See also
- [Embedding](../deep-learning/embedding.md)
