#!/bin/bash

# Create build directory if it doesn't exist
mkdir -p build

# Compile LaTeX to PDF in build directory
pdflatex -output-directory=build "$1"

# Copy PDF to src/assets directory for web serving
if [ -f "build/${1%.tex}.pdf" ]; then
    cp "build/${1%.tex}.pdf" src/assets/
    echo "PDF created and copied to src/assets/${1%.tex}.pdf"
    echo "Resume available at: /src/assets/$(basename ${1%.tex}.pdf)"
else
    echo "Error: PDF not generated"
    exit 1
fi

# Optional: Clean up auxiliary files in build directory
# rm -f build/*.aux build/*.log build/*.out