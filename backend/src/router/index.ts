import { Hono } from "hono";
import { getAllCalon, getCalonById, createCalon, updateCalon, deleteCalon } from "../controller/calon";

const apiRouter = new Hono();

apiRouter.get('/calon', getAllCalon);
apiRouter.get('/calon/:id', getCalonById);
apiRouter.post('/calon', createCalon);
apiRouter.put('/calon/:id', updateCalon);
apiRouter.delete('/calon/:id', deleteCalon);
apiRouter.put("/suara")

export { apiRouter };