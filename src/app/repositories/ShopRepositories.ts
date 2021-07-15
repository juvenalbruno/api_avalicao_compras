import { EntityRepository, Repository } from "typeorm";
import { Shop } from "../entities/Shop";

@EntityRepository(Shop)
class ShopRepositories extends Repository<Shop>{ }

export { ShopRepositories }