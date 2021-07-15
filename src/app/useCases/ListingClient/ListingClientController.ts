import { Request, Response } from "express"
import { ListingClientUseCase } from "./ListingClientUseCase"

class ListingClientController {
    async handle(req: Request, res: Response) {
        const listingClientUseCase = new ListingClientUseCase();

        const clients = listingClientUseCase.execute();

        return res.json(clients);
    }
}
export { ListingClientController }