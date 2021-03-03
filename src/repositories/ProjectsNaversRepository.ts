import { EntityRepository, Repository } from "typeorm"
import { ProjectNaver } from "../models/ProjectNaver"


@EntityRepository(ProjectNaver)
class ProjectsNaversRepository extends Repository<ProjectNaver>{}

export{ ProjectsNaversRepository }