import { EntityRepository, Repository } from "typeorm";
import { Collaborator } from "../entities/Collaborator";

@EntityRepository(Collaborator)
class CollaboratorRepositories extends Repository<Collaborator>{ }

export { CollaboratorRepositories }