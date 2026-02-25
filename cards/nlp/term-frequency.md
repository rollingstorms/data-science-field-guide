---
id: nlp.tf
title: Term Frequency (TF)
tags: [nlp, information-retrieval, text]
related: [nlp.idf, nlp.tfidf]
prereqs: []
---

# Term Frequency (TF)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{tf}(t,d) = \frac{\mathrm{count}(t,d)}{\sum_{t'} \mathrm{count}(t',d)}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(t\): term
- \(d\): document
- \(\mathrm{count}(t,d)\): occurrences of \(t\) in \(d\)

</div>
## What it means
Relative frequency of a term within a document.



## What it's used for
- Bag-of-words feature construction.
- Input to TF-IDF weighting.

## Key properties
- Normalized by document length.
- Values in \([0,1]\).

## Common gotchas
- Raw counts can overweight long documents.
- Stopwords dominate without filtering.

## Example
If \(t\) appears 3 times in a 100-token document, \(\mathrm{tf}=0.03\).

## How to Compute (Pseudocode)
```text
Input: tokenized document d and target term t (or all terms)
Output: TF values

count occurrences of each term in d
compute document length (or total term count)
for each term:
  tf(term, d) <- count(term, d) / document_length
return TF values
```

## Complexity
- Time: \(O(L)\) for a document of length \(L\) to count terms and compute normalized frequencies
- Space: Depends on the number of unique terms in the document (up to \(O(L)\))
- Assumptions: Tokenized input document; sparse maps/dictionaries used for term counts

