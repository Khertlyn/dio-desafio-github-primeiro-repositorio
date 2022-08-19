import { Request, Response } from "express";
import { ListAnnoucementCiadService } from "../services/ListAnnoucementCiadService";

class ListAnnoucementCiadController {
    async hanle(request: Request, response: Response){
        const listAnnoucementCiadService = new ListAnnoucementCiadService();

        const allMessages = await listAnnoucementCiadService.execute();

        return response.json(allMessages)
    }
}

export { ListAnnoucementCiadController }