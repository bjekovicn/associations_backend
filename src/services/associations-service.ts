import { Sequelize } from "sequelize-typescript";
import { Category } from "../models/categories-model";
import { AssociationModel } from "../models/associations-model";
import type { AssociationDTO } from "../dtos/associations.dto";

const getRandomAssociations = async (): Promise<AssociationDTO[]> => {
  const result = await AssociationModel.findAll({
    limit: 30,
    order: Sequelize.literal("RANDOM()"),
    attributes: { exclude: ["category_id"] },
    include: {
      model: Category,
      as: "category",
    },
  });
  return result as unknown as AssociationDTO[];
};
export default { getRandomAssociations };
