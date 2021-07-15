import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

class CreateClientController {
    async handle(req: Request, res: Response) {
        const { name, cpf, tel, email } = req.body;

        const createClientUseCase = new CreateClientUseCase()

        const client = await createClientUseCase.execute({
            name,
            cpf,
            tel,
            email
        })

        return res.json(client)
    }
}
export { CreateClientController }