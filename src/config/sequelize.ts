import dotenv from "dotenv";
dotenv.config();
import { Sequelize, type Dialect } from "sequelize";

const sequelize = new Sequelize(process.env.DB_URL, {
  logging: false,
  dialect: "postgres" as Dialect,
});

(async () => {
  sequelize
    .authenticate()
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB error:", err));
})();
export { sequelize };
