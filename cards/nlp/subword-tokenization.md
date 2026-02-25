---
id: nlp.subword-tokenization
title: Subword Tokenization (BPE / WordPiece)
tags: [nlp, llms, tokenization]
related: [nlp.tokenization, nlp.language-model]
prereqs: [nlp.tokenization]
---

# Subword Tokenization (BPE / WordPiece)

<div class="formula" markdown="1">
## Formula
\[
\text{word} \rightarrow \text{subword pieces}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- Vocabulary of subword units
- Merge rules / tokenization model

</div>
## What it means
Subword tokenization represents text using pieces smaller than words, reducing unknown-word problems.

## What it's used for
- Modern language models and translation systems.
- Handling rare words and morphology efficiently.

## Key properties
- Balances vocabulary size vs sequence length.
- Frequently occurring patterns become reusable tokens.

## Common gotchas
- Token boundaries differ across tokenizer families.
- Retokenizing with a different vocabulary can break model compatibility.

## Example
"playing" may tokenize as `play` + `ing` in a subword scheme.

## How to Compute (Pseudocode)
```text
Input: text and a trained subword tokenizer (BPE/WordPiece-like)
Output: subword token sequence

pre-tokenize text if required by the tokenizer
for each text span/word:
  iteratively apply subword merges or longest-match lookup rules
  emit resulting subword pieces
map subword pieces to IDs
return subword IDs
```

## Complexity
- Time: Depends on tokenizer implementation and text length; commonly near-linear in characters/tokens with trie/hash-based lookup and merge rules
- Space: Linear in output token count plus tokenizer vocabulary/merge table storage
- Assumptions: Trained tokenizer is already available; training a tokenizer is a separate workflow with different costs

## See also
- [Tokenization](../nlp/tokenization.md)
- [Language Model](../nlp/language-model.md)
