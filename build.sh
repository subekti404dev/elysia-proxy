#!/bin/bash

docker buildx build --push \
  --platform linux/arm64,linux/amd64 \
  --tag subekti13/elysia-proxy:latest \
  .