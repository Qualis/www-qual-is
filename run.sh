#!/usr/bin/env bash

set -e

cd /app

if [ ! -d "node_modules" ]; then
    echo "Installing Node.js dependencies..."
    npm ci --only=production --ignore-scripts
fi

echo "Starting www.qual.is..."
exec npm start
