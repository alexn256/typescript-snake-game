#!/bin/bash

echo "Compile typescript to javascript..."
npm run build

if [ $? -eq 0 ]; then
    echo "Copy html, css and javascript files..."
    mkdir build
    cp -r src/index.html build/index.html
    cp -r src/main.css build/main.css
    cp -r src/app.js build/app.js
    cp -r src/image/logo.png build/logo.png
else
    echo "Compilation of typescript to javascript has failed!"
    exit 1
fi

echo "Build execution successfully complete."