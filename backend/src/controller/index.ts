import { Context } from "hono";

export const getHome = (c: Context) => {
  return c.json({ message: "backend trustBuy by Syamsul Alam" });
};