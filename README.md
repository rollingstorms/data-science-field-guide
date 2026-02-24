# Data Science Field Guide

A Markdown-first field guide for data science and machine learning concepts, organized as flashcards.

## What is this?

A compact reference of concept cards covering the math, statistics, and ML topics that come up in real data science work.

Each card is a short, structured page with definitions, formulas, intuition, examples, and links to related concepts.

## Who is it for?

- Data scientists who want a fast refresher while working
- ML engineers who need quick concept lookups
- Students moving from theory to practical ML
- Anyone building a durable personal/reference knowledge base for data science

## Why does it exist?

To make review and recall fast.

Instead of searching scattered notes, docs, and textbooks, this project keeps commonly used concepts in one consistent format that is easy to browse, extend, and revisit.

## How is it organized?

- `cards/`: topic cards grouped by category (for example probability/stats, machine learning, metrics, linear algebra, optimization, graphs, NLP, deep learning)
- `index/`: generated index, tags, and glossary pages
- `assets/`: generated metadata plus UI helpers/styles for the site
- `scripts/build_index.py`: generates indexes, tags, metadata, and `mkdocs.yml` from card frontmatter
- `site/`: built static site output

## How do I use it?

### Browse (fastest)

- Read cards directly in `cards/`
- Or open the built site in `site/` (after a build)

### Build / serve locally

Generate indexes/tags and run MkDocs locally:

```bash
./run.sh
```

Or run specific MkDocs commands:

```bash
./run.sh build
./run.sh gh-deploy
```

## Dynamic index/tags + MkDocs
Everything is generated from card frontmatter:

```bash
./run.sh
```

This runs:
- `python scripts/build_index.py` (regenerates `index/INDEX.md`, `index/TAGS.md`, and `mkdocs.yml`)
- `mkdocs serve` (or any `mkdocs` subcommand you pass)

Examples:

```bash
./run.sh build
./run.sh gh-deploy
```

## Requirements

```bash
pip install -r requirements.txt
```

## Style + spec
- Canonical card spec: `SPEC.md`
- Authoring template: `_template/card.md`
- Visual style rules: `_template/style.md`
