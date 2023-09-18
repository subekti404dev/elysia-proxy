import cors from "@elysiajs/cors";
import { Elysia } from "elysia";

const app = new Elysia()
  .use(cors())
  .all("/", async (args) => {
    try {
      const { query, body, request, headers } = args;
      const tUrl = query?.url || "";
      if (!tUrl) throw new Error("Need URL");
      const targetUrl = new URL(tUrl as string);

      if (!['http:', 'https:'].includes(targetUrl.protocol)){
        throw new Error('Invalid Protocol')
      }

      const tRequest = new Request({
        method: request.method,
        url: tUrl as string,
        headers: { ...headers, host: targetUrl.host },
        body: body ? JSON.stringify(body) : undefined,
      });
      return fetch(tRequest);
    } catch (e: any) {
      let eMsg = e.message;
      if (eMsg === "Type error") eMsg = "Invalid URL";
      return Response.json({ message: eMsg }, { status: 400 });
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
