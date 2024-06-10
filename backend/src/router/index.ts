import { Hono } from "hono";
import { getAllCalon, getCalonById, createCalon, updateCalon, deleteCalon } from "../controller/calon";
import { rekapSuara, rekapSuara2, tambahSuara } from "../controller/suara";
import { getGambar } from "../controller/gambar";

const apiRouter = new Hono();

apiRouter.get('/calon', getAllCalon);
apiRouter.get('/calon/:id', getCalonById);
apiRouter.post('/calon', createCalon);
apiRouter.put('/calon/:id', updateCalon);
apiRouter.delete('/calon/:id', deleteCalon);
apiRouter.put("/suara", tambahSuara)
apiRouter.get("/rekap", rekapSuara)
apiRouter.get("/rekap2", rekapSuara2)
apiRouter.get("/gambar/*", getGambar)

export { apiRouter };