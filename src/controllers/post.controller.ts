import { Factory } from "hono/factory";
import { postValidator } from "../middlewares/validations/post";
import prisma from "../config/Prisma";

const factory = new Factory();

export const FindAll = factory.createHandlers(async (c) => {
  const res = await prisma.post.findMany();
  return c.json(res);
});

export const FindOne = factory.createHandlers(async (c) => {
  const id = c.req.param("id");

  const res = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  return c.json(res);
});

export const Save = factory.createHandlers(postValidator, async (c) => {
  const body = c.req.valid("json");

  const res = await prisma.post.create({
    data: body,
  });

  return c.json(res);
});

export const Update = factory.createHandlers(postValidator, async (c) => {
  const id = c.req.param("id");
  const body = c.req.valid("json");

  const res = await prisma.post.update({
    where: {
      id,
    },
    data: body,
  });

  return c.json(res);
});

export const Delete = factory.createHandlers(async (c) => {
  const id = c.req.param("id");

  const res = await prisma.post.delete({
    where: {
      id,
    },
  });

  return c.json(res);
});
