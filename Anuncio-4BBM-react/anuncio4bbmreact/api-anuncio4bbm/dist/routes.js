"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateAnnouncementCiadController_1 = require("./controllers/CreateAnnouncementCiadController");
const ListAnnouncementCiadController_1 = require("./controllers/ListAnnouncementCiadController");
const router = express_1.Router();
exports.router = router;
const creatAnnoucementCiadController = new CreateAnnouncementCiadController_1.CreateAnnouncementCiadController();
const listAnnoucementCiadController = new ListAnnouncementCiadController_1.ListAnnoucementCiadController();
router.get('/', (request, response) => {
    return response.json({ message: 'Bem vindo ao anúncio 4ºBBM' });
});
router.get('/message', listAnnoucementCiadController.hanle);
router.post('/message', creatAnnoucementCiadController.handle);
router.get('/anuncio', listAnnoucementCiadController.hanle);
router.post('/anuncio', creatAnnoucementCiadController.handle);
//# sourceMappingURL=routes.js.map