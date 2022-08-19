import { Router, Request, Response } from "express";
import { CreateAnnouncementCiadController } from "./controllers/CreateAnnouncementCiadController";
import { ListAnnoucementCiadController } from "./controllers/ListAnnouncementCiadController";

const router = Router();

const creatAnnoucementCiadController = new CreateAnnouncementCiadController();
const listAnnoucementCiadController = new ListAnnoucementCiadController();

router.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Bem vindo ao anúncio 4ºBBM'})
})

router.get('/message', listAnnoucementCiadController.hanle)
router.post('/message', creatAnnoucementCiadController.handle)
router.get('/anuncio', listAnnoucementCiadController.hanle)
router.post('/anuncio', creatAnnoucementCiadController.handle)

export { router }
