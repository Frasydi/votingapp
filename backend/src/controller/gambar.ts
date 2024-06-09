import { Context } from "hono";

export async function getGambar(c : Context) {
    const path = c.req.param()
    console.log(path)
    return c.json({
        path : path
    })
}