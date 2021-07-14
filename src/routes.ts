import { Router } from "express";

const router = Router();

router.post('/users', (request, response) => {
    return response.status(202).send();
})

export { router }