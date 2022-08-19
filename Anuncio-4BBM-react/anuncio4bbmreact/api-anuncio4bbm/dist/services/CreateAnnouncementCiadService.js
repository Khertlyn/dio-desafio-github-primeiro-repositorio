"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAnnouncementCiadService = void 0;
const typeorm_1 = require("typeorm");
const AnnouncementCiadRepository_1 = require("../repository/AnnouncementCiadRepository");
class CreateAnnouncementCiadService {
    execute({ tipo_anuncio_nome, tempo_nome, efetivo }) {
        return __awaiter(this, void 0, void 0, function* () {
            const announcementCiadRepository = typeorm_1.getCustomRepository(AnnouncementCiadRepository_1.AnnouncementCiadRepository);
            if (!tipo_anuncio_nome) {
                throw new Error("Por favor informe se é anuncio ou pré-anuncio!");
            }
            if (!tempo_nome) {
                throw new Error("Por favor escreva uma messagem!");
            }
            if (!efetivo) {
                throw new Error("Por favor digite o efetivo");
            }
            const newAnnouncementCiad = announcementCiadRepository.create({ tipo_anuncio_nome, tempo_nome, efetivo });
            yield announcementCiadRepository.save(newAnnouncementCiad);
            return newAnnouncementCiad;
        });
    }
}
exports.CreateAnnouncementCiadService = CreateAnnouncementCiadService;
//# sourceMappingURL=CreateAnnouncementCiadService.js.map