#!/usr/bin/env bash

image=$1

docker manifest rm "svanosselaer/www-qual-is-${image}:latest" 2>/dev/null || true

docker manifest create \
  "svanosselaer/www-qual-is-${image}:latest" \
  --amend "svanosselaer/www-qual-is-${image}:amd64" \
  --amend "svanosselaer/www-qual-is-${image}:arm64" &&
docker manifest push "svanosselaer/www-qual-is-${image}:latest"
