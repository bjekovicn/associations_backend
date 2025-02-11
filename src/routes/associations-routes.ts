import { Router } from "express";
import { associationsController } from "../controllers";

const router = Router();

router.get("/random", associationsController.getRandomAssociations);

export default router;
