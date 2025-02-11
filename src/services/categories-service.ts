import { Category, CategoryModel } from "../models/categories-model";

const getAllCategories = async (): Promise<Category[]> => {
  return await CategoryModel.findAll();
};

export default { getAllCategories };
