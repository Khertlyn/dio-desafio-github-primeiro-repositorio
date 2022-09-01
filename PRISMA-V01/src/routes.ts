import { PrismaClient } from '@prisma/client'
import { Router, Request, Response, Express } from "express";
//import { CreateAnnouncementCiadController } from "./controllers/CreateAnnouncementCiadController";
import { CriarAnuncioCiadController } from './controllers/criarAnuncioCiadController';
//import { ListAnnoucementCiadController } from "./controllers/ListAnnouncementCiadController";

const router = Router();
const prisma = new PrismaClient()
const criarAnuncioCiadController = new CriarAnuncioCiadController();
//const listAnnoucementCiadController = new ListAnnoucementCiadController();

router.get('/', (request: Request, response: Response) => {
  return response.json({message: 'Bem vindo ao anúncio 4ºBBM'})
})

router.get('/tipoAnuncio', async (req, res) => {
    const tipoAnuncio = await prisma.tipo_anuncio.findMany()
    res.json(tipoAnuncio)
  })

router.post('/tipoAnuncio', criarAnuncioCiadController.handle);
  

//router.get('/anuncioCiad', listaAnuncioCiad.hanle)
//router.post('/message', CriarAnuncioCiadController.handle)
//router.get('/anuncio', listAnnoucementCiadController.hanle)
//router.post('/anuncio', creatAnnoucementCiadController.handle)

export { router }
