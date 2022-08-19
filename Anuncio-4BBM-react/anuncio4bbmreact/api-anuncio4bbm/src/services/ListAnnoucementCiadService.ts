import { getCustomRepository } from "typeorm";
import { AnnouncementCiadRepository } from "../repository/AnnouncementCiadRepository";

class ListAnnoucementCiadService{
    async execute(){
        const annoucementCiadRepository = getCustomRepository(AnnouncementCiadRepository);

        const allAnnoucement = await annoucementCiadRepository.find();

        return allAnnoucement
    }
}

export { ListAnnoucementCiadService }
