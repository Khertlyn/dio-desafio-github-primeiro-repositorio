import { EntityRepository, Repository } from "typeorm";
import { AnnouncementCiad } from "../entities/AnnouncementCiad";

@EntityRepository(AnnouncementCiad)
class AnnouncementCiadRepository extends Repository<AnnouncementCiad> {}

export { AnnouncementCiadRepository }