
interface IMessage {
    anuncio_basico_id: string;
    tempo_id: string;
    efetivo: number;
    obs?: string;
    operacional: number;
    scip: number;

}

class criarAnuncioCiadService {
    async execute({anuncio_basico_id, tempo_id, efetivo, obs, operacional, scip}: IMessage){
        const announcementCiadRepository = getCustomRepository(AnnouncementCiadRepository);

        if(!efetivo){
            throw new Error("Por favor digite o efetivo")
        }
        if(!operacional){
            throw new Error("Por favor digite as ocorrencias operacionais")
        }
        if(!scip){
            throw new Error("Por favor digite as ocorrencias scip")
        }


        const newAnnouncementCiad = announcementCiadRepository.create({ anuncio_basico_id, tempo_id, efetivo, obs, operacional, scip })

        await announcementCiadRepository.save(newAnnouncementCiad);

        return newAnnouncementCiad;
    }
}

export  { criarAnuncioCiadService }