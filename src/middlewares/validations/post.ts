import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const postSchema = z.object({
  title: z.string(),
  caption: z.string(),
  author: z.string(),
  updated_at: z.date().optional(),
});

export const postValidator = zValidator("json", postSchema, (result, c) => {
  if (!result.success) {
    return c.json(
      {
        message: result.error,
      },
      400
    );
  }
});
