import { Request, Response } from "express";
import { CreateAnnouncementCiadService } from "../services/CreateAnnouncementCiadService";

class CreateAnnouncementCiadController{
    async handle(request: Request, response: Response){
        const { tipo_anuncio_nome, tempo_nome, efetivo } = request.body;

        const createAnnouncementCiadService = new CreateAnnouncementCiadService();

        const newAnnouncementCiad = await createAnnouncementCiadService.execute({ tipo_anuncio_nome, tempo_nome, efetivo});

        return response.json(newAnnouncementCiad);
    }
}

export { CreateAnnouncementCiadController }