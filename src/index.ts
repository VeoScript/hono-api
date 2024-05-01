import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { post } from "./routes/post";

const app = new Hono().basePath("/api/v1");

// Enable CORS...
app.use(
  "/",
  cors({
    origin: "http://localhost:3000/",
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET", "PATCH", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
    credentials: true,
  })
);

// Index Route...
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// Group Routes e.g. (User, Post, Blog) Routes...
app.route("/", post);

const port = 8080;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
