import { categoriesService } from "../services";
import type { Request, Response, NextFunction } from "express";

const getAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await categoriesService.getAllCategories();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default { getAllCategories };
