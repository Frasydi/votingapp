import { Hono } from "hono";
import { getAllCalon, getCalonById, createCalon, updateCalon, deleteCalon } from "../controller/calon";
import { tambahSuara } from "../controller/suara";
import { getGambar } from "../controller/gambar";

const apiRouter = new Hono();

apiRouter.get('/calon', getAllCalon);
apiRouter.get('/calon/:id', getCalonById);
apiRouter.post('/calon', createCalon);
apiRouter.put('/calon/:id', updateCalon);
apiRouter.delete('/calon/:id', deleteCalon);
apiRouter.put("/suara", tambahSuara)
apiRouter.get("/gambar/*", getGambar)

export { apiRouter };