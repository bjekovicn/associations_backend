import {
  Model,
  DataTypes,
  type InferAttributes,
  type InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../config/sequelize";

//

export class Category extends Model<
  InferAttributes<Category>,
  InferCreationAttributes<Category>
> {
  declare category_id: number;
  declare name: string;
  declare photo: string | null;
}

const CategoryModel = Category.init(
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, createdAt: false, updatedAt: false }
);

export { CategoryModel };
