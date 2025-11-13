#!/bin/bash

# List of category pages to update (excluding already updated ones)
categories=("automotive" "cables" "fabrication" "hardware" "hydraulic" "plumbing" "pneumatic" "safety" "testing" "tools")

for category in "${categories[@]}"; do
    file="${category}.html"
    echo "Updating $file..."
    
    # Check if file exists
    if [ ! -f "$file" ]; then
        echo "File $file not found, skipping..."
        continue
    fi
    
    # Create backup
    cp "$file" "${file}.backup"
    
    # 1. Update navigation - remove Services, add Products dropdown
    sed -i '' '/Services<\/a>/d' "$file"
    
    # Replace Products nav item with dropdown
    sed -i '' 's|<li class="nav-item">.*<a href="index.html#products" class="nav-link">Products</a>.*</li>|<li class="nav-item dropdown"><a href="index.html#products" class="nav-link">Products</a><div class="dropdown-content"><a href="welding.html">Welding Equipment</a><a href="electrical.html">Electrical Components</a><a href="tools.html">Tools \& Equipment</a><a href="safety.html">Safety Equipment</a><a href="hydraulic.html">Hydraulic Systems</a><a href="pneumatic.html">Pneumatic Systems</a><a href="plumbing.html">Plumbing Equipment</a><a href="automotive.html">Automotive Parts</a><a href="cables.html">Cables \& Wiring</a><a href="hardware.html">Hardware \& Fasteners</a><a href="testing.html">Testing Equipment</a><a href="fabrication.html">Fabrication Tools</a></div></li>|g' "$file"
    
    echo "Updated navigation for $file"
done

echo "Navigation updates complete!"
