#!/bin/bash
set -e

# Always run from the resume directory, wherever the script is called from
cd "$(dirname "$0")"

TEX="${1:-resume.tex}"
PDF="${TEX%.tex}.pdf"

# Compile LaTeX to PDF in build directory
mkdir -p build
tectonic -o build "$TEX"

# Copy PDF to src/assets directory for web serving
cp "build/$PDF" ../src/assets/
echo "PDF created and copied to src/assets/$PDF"
