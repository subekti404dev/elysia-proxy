# Elysia Proxy

## How to Use

```bash
http://localhost:3000/?url=<target-url>
```

## Development

To start the development server run:

```bash
bun run dev
```

## Docker Image

```yaml
version: "3"
services:
  elysia-proxy:
    image: subekti13/elysia-proxy
    ports:
      - 3000:3000
    restart: always
```
