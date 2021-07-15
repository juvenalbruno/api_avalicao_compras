import { Router } from "express";
import { CreateClientController } from "./app/useCases/CreateClient/CreateClientController";

const router = Router();

const createClientController = new CreateClientController();

router.post('/client', createClientController.handle)

export { router }