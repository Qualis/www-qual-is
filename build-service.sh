#!/usr/bin/env bash

docker run --rm -v "$(pwd)":/working-dir -v /var/run/docker.sock:/var/run/docker.sock --entrypoint ./bin/create-service svanosselaer/www-qual-is-builder:latest
