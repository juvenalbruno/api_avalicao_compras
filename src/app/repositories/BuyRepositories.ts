import { EntityRepository, Repository } from "typeorm";
import { Buy } from "../entities/Buy";

@EntityRepository(Buy)
class BuyRepositories extends Repository<Buy>{ }

export { BuyRepositories }