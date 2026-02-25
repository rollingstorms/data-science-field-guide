---
id: nlp.tokenization
title: Tokenization
tags: [nlp, text-processing, llms]
related: [nlp.subword-tokenization, dl.embedding]
prereqs: []
---

# Tokenization

<div class="formula" markdown="1">
## Formula
\[
\text{text} \rightarrow (t_1,t_2,\dots,t_n)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- Raw text input
- Tokenizer rules/model
- Output tokens or token IDs

</div>
## What it means
Tokenization splits text into units (tokens) that a model can process.

## What it's used for
- NLP preprocessing and indexing.
- Preparing inputs for language models.

## Key properties
- Token granularity can be word, subword, character, or byte-level.
- Tokenization choice affects vocabulary size and sequence length.

## Common gotchas
- Different tokenizers produce different token counts and IDs.
- Whitespace/punctuation/Unicode normalization choices matter.

## Example
"unhappiness" might be one word token, multiple subword tokens, or many character tokens.

## How to Compute (Pseudocode)
```text
Input: raw text string and tokenizer rules/model
Output: token sequence (and optionally token IDs)

normalize text according to tokenizer settings (if applicable)
apply tokenizer rules/model to split text into tokens/subwords/bytes
map tokens to IDs using the tokenizer vocabulary
return tokens/IDs
```

## Complexity
- Time: Depends on tokenizer type and implementation; typically linear in input text length for common tokenizers
- Space: Linear in the number of produced tokens plus tokenizer vocabulary/model storage
- Assumptions: Exact complexity depends on tokenization scheme (word, subword, byte-level) and preprocessing rules

## See also
- [Subword Tokenization (BPE / WordPiece)](../nlp/subword-tokenization.md)
- [Embedding](../deep-learning/embedding.md)
