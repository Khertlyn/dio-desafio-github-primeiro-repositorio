import { Request, Response } from "express";
import { prisma } from '../database/dbconfig'

export class CriarAnuncioCiadController{
    async handle(request: Request, response: Response){
        const { efetivo_t2, efetivo_t1, efetivo_t3 , obs, operacional, scip } = request.body;


        const novoAnuncioCiad = await prisma.anuncio_ciad.create(    
            { 
                data: {
                    operacional,
                    efetivo_t2, 
                    efetivo_t1, 
                    efetivo_t3,
                    scip,
                    obs,
               },
            })

        return response.json(novoAnuncioCiad);
    }
}
