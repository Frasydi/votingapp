import { Hono } from "hono";

const app = new Hono();

app.get('/',(c) => c.json("list suara"))
app.post('/',(c) => c.json("create suara",201))
app.get('/:id',(c) => c.json(`get ${c.req.param('id')}`))

export default app