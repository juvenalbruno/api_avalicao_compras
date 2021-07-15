import { EntityRepository, Repository } from "typeorm";
import { Experience } from "../entities/Experience";

@EntityRepository(Experience)
class ExperienceRepositories extends Repository<Experience>{ }

export { ExperienceRepositories }