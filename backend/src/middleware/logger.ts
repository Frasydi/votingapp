import { Context,Next } from "hono";

export const logger = async(c:Context,next:Next) => {
    console.log(`${c.req.method} ${c.req.url}`);
    await next();
};