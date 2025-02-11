import { Router } from "express";
import { categoriesController } from "../controllers";

const router = Router();

router.get("/", categoriesController.getAllCategories);

export default router;
