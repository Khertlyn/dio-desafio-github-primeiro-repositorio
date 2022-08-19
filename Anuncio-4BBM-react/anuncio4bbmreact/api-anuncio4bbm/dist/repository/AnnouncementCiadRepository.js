"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementCiadRepository = void 0;
const typeorm_1 = require("typeorm");
const AnnouncementCiad_1 = require("../entities/AnnouncementCiad");
let AnnouncementCiadRepository = class AnnouncementCiadRepository extends typeorm_1.Repository {
};
AnnouncementCiadRepository = __decorate([
    typeorm_1.EntityRepository(AnnouncementCiad_1.AnnouncementCiad)
], AnnouncementCiadRepository);
exports.AnnouncementCiadRepository = AnnouncementCiadRepository;
//# sourceMappingURL=AnnouncementCiadRepository.js.map