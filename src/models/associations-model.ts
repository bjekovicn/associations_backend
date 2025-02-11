import {
  Model,
  DataTypes,
  type InferAttributes,
  type InferCreationAttributes,
  type ForeignKey,
} from "sequelize";
import { sequelize } from "../config/sequelize";
import { Category, CategoryModel } from "./categories-model";

//

export class Association extends Model<
  InferAttributes<Association>,
  InferCreationAttributes<Association>
> {
  declare association_id: number;
  declare name: string;
  declare category_id: ForeignKey<number>;
}

const AssociationModel = Association.init(
  {
    association_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
  },
  { sequelize, createdAt: false, updatedAt: false }
);

Association.belongsTo(Category, {
  foreignKey: "category_id",
  as: "category",
});

Category.hasMany(Association, {
  foreignKey: "category_id",
  as: "associations",
});

export { AssociationModel };
