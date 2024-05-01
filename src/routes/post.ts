import { Hono } from "hono";
import {
  FindAll,
  FindOne,
  Save,
  Update,
  Delete,
} from "../controllers/post.controller";

export const post = new Hono().basePath("/post");

post.get("/", ...FindAll);
post.get("/:id", ...FindOne);
post.post("/", ...Save);
post.patch("/:id", ...Update);
post.delete("/:id", ...Delete);
