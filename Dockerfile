FROM  oven/bun as builder

WORKDIR /app
COPY . .
RUN bun install && bun run build

FROM oven/bun
WORKDIR /app
COPY --from=builder /app/elysia-proxy /app/elysia-proxy
RUN chmod +x /app/elysia-proxy
EXPOSE 3000

CMD [ "/app/elysia-proxy" ]