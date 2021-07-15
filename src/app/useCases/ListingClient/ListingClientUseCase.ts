import { getCustomRepository } from "typeorm"
import { ClientRepositories } from "../../repositories/ClientRepositories"

class ListingClientUseCase {
    async execute() {
        const clientRepositories = getCustomRepository(ClientRepositories);

        const clients = await clientRepositories.find();

        return clients;
    }
}
export { ListingClientUseCase }