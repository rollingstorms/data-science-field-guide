---
id: nlp.idf
title: Inverse Document Frequency (IDF)
tags: [nlp, information-retrieval, text]
related: [nlp.tf, nlp.tfidf]
prereqs: []
---

# Inverse Document Frequency (IDF)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{idf}(t) = \log\frac{N}{\mathrm{df}(t)}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(N\): total number of documents
- \(\mathrm{df}(t)\): number of documents containing term \(t\)

</div>
## What it means
Downweights terms that appear in many documents.



## What it's used for
- Weighting terms by rarity.
- Combining with TF for TF-IDF.

## Key properties
- Larger for rare terms.
- Zero if \(\mathrm{df}(t)=N\).

## Common gotchas
- If \(\mathrm{df}(t)=0\), use smoothing: \(\log\frac{N+1}{\mathrm{df}(t)+1}+1\).
- Log base changes scale but not ranking.

## Example
If \(N=1000\) and \(\mathrm{df}(t)=10\), then \(\mathrm{idf}=\log(100)\).
