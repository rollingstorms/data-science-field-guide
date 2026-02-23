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

## See also
- [Tokenization](../nlp/tokenization.md)
- [Language Model](../nlp/language-model.md)
