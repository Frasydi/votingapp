import { Hono } from "hono";
import calon from "../controller/calon";
import suara from "../controller/suara";

const app = new Hono()

app.route('/calon', calon)
app.route('/suara',suara)

export default app