# Math Handbook

A Markdown-first math handbook organized as flashcards.

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
