import { getCustomRepository } from "typeorm"
import { ClientRepositories } from "../../repositories/ClientRepositories"

interface IClientRequest {
    name: string;
    cpf: string;
    tel?: string;
    email?: string;
}

class CreateClientUseCase {
    async execute({ name, cpf, tel, email }: IClientRequest) {
        const clientRepository = getCustomRepository(ClientRepositories);

        if (!name)
                throw new Error("name incorrect")
        if (!cpf)
            throw new Error("cpf incorrect")
        
        const clientAlreadyExists = await clientRepository.findOne({ cpf });

        if (clientAlreadyExists)
            throw new Error("User already exists");
        
        const client = clientRepository.create({
            name,
            cpf,
            tel,
            email
        });

        await clientRepository.save(client);

        return client;
    }
}

export { CreateClientUseCase }