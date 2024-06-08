import { Hono } from "hono";
import { getAllCalon, getCalonById, createCalon, updateCalon, deleteCalon } from "../controller/calon";
import { getRekap, addSuara,deleteSuara} from "../controller/suara";

const apiRouter = new Hono();

apiRouter.get('/calon', getAllCalon);
apiRouter.get('/calon/:id', getCalonById);
apiRouter.post('/calon', createCalon);
apiRouter.put('/calon/:id', updateCalon);
apiRouter.delete('/calon/:id', deleteCalon);

//suara
apiRouter.get('/rekap', getRekap);
apiRouter.post('/suara/:id', addSuara);
apiRouter.delete('/suara/:id', deleteSuara);


export { apiRouter };