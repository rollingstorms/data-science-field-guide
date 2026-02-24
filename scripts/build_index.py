#!/usr/bin/env python3
from __future__ import annotations

import ast
import json
import os
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Optional

ROOT = Path(__file__).resolve().parents[1]
CARDS_DIR = ROOT / "cards"
INDEX_PATH = ROOT / "index" / "INDEX.md"
TAGS_PATH = ROOT / "index" / "TAGS.md"
MKDOCS_PATH = ROOT / "mkdocs.yml"
DOCS_DIR = ROOT / "docs"
CARD_TAGS_JSON_PATH = ROOT / "assets" / "card-tags.json"
FORMULAS_JSON_PATH = ROOT / "assets" / "formulas.json"

CATEGORY_ALIASES = {
    "info-theory": "Information Theory",
    "ml-metrics": "ML Metrics",
    "graphs": "Graphs",
}

ACRONYMS = {"ml", "nlp", "rl", "cv", "ai", "svd", "pca", "fft"}

# LINT
REQUIRED_ORDER = [
    "## Formula",
    "## Parameters",
    "## What it means",
    "## What it's used for",
    "## Key properties",
    "## Common gotchas",
    "## Example",
]
OPTIONAL = {"## Quick example", "## See also", "## Plot"}


def lint_card(path: Path, text: str) -> list[str]:
    issues: list[str] = []
    headings = [line.strip() for line in text.splitlines() if line.startswith("## ")]
    if not headings:
        issues.append("missing section headings")
        return issues
    pos = {h: i for i, h in enumerate(headings)}
    for req in REQUIRED_ORDER:
        if req not in pos:
            issues.append(f"missing {req}")
    if all(req in pos for req in REQUIRED_ORDER):
        order = [pos[h] for h in REQUIRED_ORDER]
        if order != sorted(order):
            issues.append("sections out of order")
    allowed = set(REQUIRED_ORDER) | OPTIONAL
    for h in headings:
        if h not in allowed:
            issues.append(f"unexpected heading {h}")
    return issues


@dataclass
class Card:
    title: str
    rel_path: str
    tags: List[str]
    category: str


def parse_frontmatter(text: str) -> Dict[str, object]:
    if not text.startswith("---"):
        return {}
    lines = text.splitlines()
    try:
        end = lines[1:].index("---") + 1
    except ValueError:
        return {}

    fm_lines = lines[1:end]
    data: Dict[str, object] = {}
    for line in fm_lines:
        if not line.strip() or line.strip().startswith("#"):
            continue
        # Ignore nested YAML we don't parse (e.g., an optional `plot:` block)
        # so indented keys don't get flattened into top-level metadata.
        if line[:1].isspace():
            continue
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        key = key.strip()
        value = value.strip()
        if not value:
            data[key] = ""
            continue
        if value.startswith("[") and value.endswith("]"):
            try:
                data[key] = ast.literal_eval(value)
            except (ValueError, SyntaxError):
                data[key] = [v.strip() for v in value.strip("[]").split(",") if v.strip()]
        else:
            data[key] = value.strip("'\"")
    return data


def title_from_heading(text: str) -> Optional[str]:
    for line in text.splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return None


def humanize_category(segment: str) -> str:
    if segment in CATEGORY_ALIASES:
        return CATEGORY_ALIASES[segment]
    parts = segment.split("-")
    human = []
    for part in parts:
        if part.lower() in ACRONYMS:
            human.append(part.upper())
        else:
            human.append(part.capitalize())
    return " ".join(human)


def collect_cards() -> List[Card]:
    cards: List[Card] = []
    for path in sorted(CARDS_DIR.rglob("*.md")):
        text = path.read_text(encoding="utf-8")
        fm = parse_frontmatter(text)
        title = str(fm.get("title") or "").strip()
        if not title:
            title = title_from_heading(text) or path.stem.replace("-", " ").title()
        tags_val = fm.get("tags") or []
        tags = [t.strip() for t in tags_val] if isinstance(tags_val, list) else []

        rel_path = path.relative_to(ROOT).as_posix()
        # category is the first folder under cards/
        parts = path.relative_to(CARDS_DIR).parts
        category = parts[0] if parts else "misc"
        cards.append(Card(title=title, rel_path=rel_path, tags=tags, category=category))
    return cards


def extract_section(text: str, heading: str) -> Optional[str]:
    lines = text.splitlines()
    start_idx: Optional[int] = None
    for i, line in enumerate(lines):
        if line.strip() == heading:
            start_idx = i + 1
            break
    if start_idx is None:
        return None

    out: List[str] = []
    for line in lines[start_idx:]:
        if line.startswith("## "):
            break
        stripped = line.strip()
        if stripped == "<div class=\"formula\" markdown=\"1\">":
            continue
        if stripped == "</div>":
            break
        out.append(line)
    section = "\n".join(out).strip()
    return section or None


def normalize_formula_markdown(formula: str) -> str:
    return formula.strip()


def build_index(cards: List[Card]) -> str:
    by_category: Dict[str, List[Card]] = {}
    for card in cards:
        by_category.setdefault(card.category, []).append(card)

    lines: List[str] = ["# Index", "", "_This file is auto-generated. Do not edit by hand._", ""]
    for category in sorted(by_category.keys()):
        lines.append(f"## {humanize_category(category)}")
        for card in sorted(by_category[category], key=lambda c: c.title.lower()):
            link = f"../{card.rel_path}"
            lines.append(f"- [{card.title}]({link})")
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def build_tags(cards: List[Card]) -> str:
    by_tag: Dict[str, List[Card]] = {}
    for card in cards:
        for tag in card.tags:
            by_tag.setdefault(tag, []).append(card)

    lines: List[str] = ["# Tags", "", "_This file is auto-generated. Do not edit by hand._", ""]
    for tag in sorted(by_tag.keys()):
        lines.append(f"## {tag}")
        for card in sorted(by_tag[tag], key=lambda c: c.title.lower()):
            link = f"../{card.rel_path}"
            lines.append(f"- [{card.title}]({link})")
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def build_mkdocs(cards: List[Card]) -> str:
    by_category: Dict[str, List[Card]] = {}
    for card in cards:
        by_category.setdefault(card.category, []).append(card)

    nav_lines: List[str] = [
        "nav:",
        "  - Home: README.md",
        "  - Index: index/INDEX.md",
        "  - Tags: index/TAGS.md",
        "  - Glossary: index/GLOSSARY.md",
        "  - Cards:",
    ]
    for category in sorted(by_category.keys()):
        nav_lines.append(f"      - {humanize_category(category)}:")
        for card in sorted(by_category[category], key=lambda c: c.title.lower()):
            nav_lines.append(f"          - {card.title}: {card.rel_path}")

    mkdocs = f"""# Auto-generated by scripts/build_index.py. Do not edit by hand.
site_name: Data Science Field Guide
site_description: Markdown-first field guide for data science and machine learning concepts, organized as flashcards.
site_url: https://example.com

# Docs live in ./docs, which mirrors the repo via symlinks
docs_dir: docs

# Avoid publishing non-doc artifacts
exclude_docs: |
  .DS_Store
  _template/
  relations/
  scripts/
  mkdocs.yml

{chr(10).join(nav_lines)}

theme:
  name: material
  features:
    - navigation.instant
    - navigation.sections
    - search.suggest
    - search.highlight

markdown_extensions:
  - admonition
  - footnotes
  - md_in_html
  - tables
  - toc:
      permalink: true
  - pymdownx.arithmatex:
      generic: true

extra_css:
  - assets/styles.css

extra_javascript:
  - assets/mathjax-config.js
  - assets/tag-pills.js
  - assets/formula-of-day.js
  - https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js
  - https://cdn.jsdelivr.net/npm/function-plot/dist/function-plot.js
  - assets/plot-blocks.js
  - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js
"""
    return mkdocs.rstrip() + "\n"


def build_card_tags_json(cards: List[Card]) -> str:
    mapping: Dict[str, Dict[str, object]] = {}
    for card in cards:
        route = "/" + card.rel_path[:-3] + "/"  # replace .md with trailing slash route
        mapping[route] = {
            "title": card.title,
            "tags": card.tags,
            "category": card.category,
        }
    return json.dumps(mapping, ensure_ascii=True, indent=2, sort_keys=True) + "\n"


def build_formulas_json(cards: List[Card]) -> str:
    records: List[Dict[str, str]] = []
    for card in cards:
        card_text = (ROOT / card.rel_path).read_text(encoding="utf-8")
        formula = extract_section(card_text, "## Formula")
        if not formula:
            continue
        records.append(
            {
                "title": card.title,
                "category": humanize_category(card.category),
                "route": "/" + card.rel_path[:-3] + "/",
                "formula_markdown": normalize_formula_markdown(formula),
            }
        )
    return json.dumps(records, ensure_ascii=True, indent=2) + "\n"


def main() -> None:
    cards = collect_cards()
    lint_issues: list[tuple[str, list[str]]] = []
    for card in cards:
        card_path = ROOT / card.rel_path
        issues = lint_card(card_path, card_path.read_text(encoding="utf-8"))
        if issues:
            lint_issues.append((card.rel_path, issues))
    if lint_issues:
        print("[lint] Card format issues detected:")
        for rel, issues in lint_issues:
            print(f"  - {rel}: {', '.join(issues)}")
        print("[lint] Fix these to match SPEC.md.")
    INDEX_PATH.write_text(build_index(cards), encoding="utf-8")
    TAGS_PATH.write_text(build_tags(cards), encoding="utf-8")
    MKDOCS_PATH.write_text(build_mkdocs(cards), encoding="utf-8")
    CARD_TAGS_JSON_PATH.write_text(build_card_tags_json(cards), encoding="utf-8")
    FORMULAS_JSON_PATH.write_text(build_formulas_json(cards), encoding="utf-8")
    ensure_docs_symlinks()


def ensure_docs_symlinks() -> None:
    DOCS_DIR.mkdir(exist_ok=True)
    targets = {
        "README.md": ROOT / "README.md",
        "cards": ROOT / "cards",
        "index": ROOT / "index",
        "assets": ROOT / "assets",
    }
    for name, target in targets.items():
        link = DOCS_DIR / name
        # `Path.exists()` is false for broken symlinks. CI can check out symlinks
        # that point to a local absolute path from another machine, so use lexists.
        if os.path.lexists(link):
            if link.is_symlink():
                link.unlink()
            else:
                continue
        link.symlink_to(target)


if __name__ == "__main__":
    main()
