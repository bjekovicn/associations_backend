import { associationsService } from "../services";
import type { Request, Response, NextFunction } from "express";

const getRandomAssociations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await associationsService.getRandomAssociations();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default { getRandomAssociations };
