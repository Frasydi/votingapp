import { Hono } from "hono";
import { getHome } from "../controller/index";

const apiRouter = new Hono();

apiRouter.get('/', getHome);

export { apiRouter };