---
id: nlp.tfidf
title: TF-IDF
tags: [nlp, information-retrieval, text]
related: [nlp.tf, nlp.idf]
prereqs: [nlp.tf, nlp.idf]
---

# TF-IDF

<div class="formula" markdown="1">
## Formula
\[
\mathrm{tfidf}(t,d) = \mathrm{tf}(t,d)\cdot \mathrm{idf}(t)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(t\): term
- \(d\): document
- \(\mathrm{tf}(t,d)\): term frequency
- \(\mathrm{idf}(t)\): inverse document frequency

</div>
## What it means
Weights terms by frequency in a document and rarity across documents.



## What it's used for
- Text feature extraction.
- Document ranking and similarity.

## Key properties
- Emphasizes terms that are frequent in a document but rare overall.
- Sparse, high-dimensional representation.

## Common gotchas
- Needs consistent tokenization and normalization.
- For short documents, TF-IDF can be noisy.

## Example
If \(\mathrm{tf}=0.03\) and \(\mathrm{idf}=\log(100)\approx 4.605\),
then \(\mathrm{tfidf}=0.138\).
