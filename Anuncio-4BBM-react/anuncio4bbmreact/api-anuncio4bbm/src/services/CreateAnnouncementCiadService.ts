import { getCustomRepository } from "typeorm";
import { AnnouncementCiadRepository } from "../repository/AnnouncementCiadRepository";

interface IMessage {
    tipo_anuncio_nome: string;
    tempo_nome: string;
    efetivo: number;
}

class CreateAnnouncementCiadService {
    async execute({tipo_anuncio_nome, tempo_nome, efetivo}: IMessage){
        const announcementCiadRepository = getCustomRepository(AnnouncementCiadRepository);

        if(!tipo_anuncio_nome){
            throw new Error("Por favor informe se é anuncio ou pré-anuncio!")
        }

        if(!tempo_nome){
            throw new Error("Por favor escreva uma messagem!")
        }

        if(!efetivo){
            throw new Error("Por favor digite o efetivo")
        }


        const newAnnouncementCiad = announcementCiadRepository.create({ tipo_anuncio_nome, tempo_nome, efetivo })

        await announcementCiadRepository.save(newAnnouncementCiad);

        return newAnnouncementCiad;
    }
}

export  { CreateAnnouncementCiadService }