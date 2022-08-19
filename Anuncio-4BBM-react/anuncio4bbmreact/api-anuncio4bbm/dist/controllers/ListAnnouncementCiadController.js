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
exports.ListAnnoucementCiadController = void 0;
const ListAnnoucementCiadService_1 = require("../services/ListAnnoucementCiadService");
class ListAnnoucementCiadController {
    hanle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const listAnnoucementCiadService = new ListAnnoucementCiadService_1.ListAnnoucementCiadService();
            const allMessages = yield listAnnoucementCiadService.execute();
            return response.json(allMessages);
        });
    }
}
exports.ListAnnoucementCiadController = ListAnnoucementCiadController;
//# sourceMappingURL=ListAnnouncementCiadController.js.map