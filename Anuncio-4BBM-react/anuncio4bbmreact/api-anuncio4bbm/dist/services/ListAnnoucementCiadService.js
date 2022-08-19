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
exports.ListAnnoucementCiadService = void 0;
const typeorm_1 = require("typeorm");
const AnnouncementCiadRepository_1 = require("../repository/AnnouncementCiadRepository");
class ListAnnoucementCiadService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const annoucementCiadRepository = typeorm_1.getCustomRepository(AnnouncementCiadRepository_1.AnnouncementCiadRepository);
            const allAnnoucement = yield annoucementCiadRepository.find();
            return allAnnoucement;
        });
    }
}
exports.ListAnnoucementCiadService = ListAnnoucementCiadService;
//# sourceMappingURL=ListAnnoucementCiadService.js.map