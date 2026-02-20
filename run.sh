#!/usr/bin/env bash
set -euo pipefail

python scripts/build_index.py

if [ $# -eq 0 ]; then
  mkdocs serve
else
  mkdocs "$@"
fi
