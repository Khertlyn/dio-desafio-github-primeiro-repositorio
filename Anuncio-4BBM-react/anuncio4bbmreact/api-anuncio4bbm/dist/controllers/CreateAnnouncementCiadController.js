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
exports.CreateAnnouncementCiadController = void 0;
const CreateAnnouncementCiadService_1 = require("../services/CreateAnnouncementCiadService");
class CreateAnnouncementCiadController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tipo_anuncio_nome, tempo_nome, efetivo } = request.body;
            const createAnnouncementCiadService = new CreateAnnouncementCiadService_1.CreateAnnouncementCiadService();
            const newAnnouncementCiad = yield createAnnouncementCiadService.execute({ tipo_anuncio_nome, tempo_nome, efetivo });
            return response.json(newAnnouncementCiad);
        });
    }
}
exports.CreateAnnouncementCiadController = CreateAnnouncementCiadController;
//# sourceMappingURL=CreateAnnouncementCiadController.js.map