import express from "express";

import { associationsRouter, categoriesRouter } from "./routes";
import { errorMiddleware } from "./middlewares/error-middleware";

const app = express();

app.use("/categories", categoriesRouter);
app.use("/associations", associationsRouter);
app.use(errorMiddleware);

app.listen(process.env.APP_PORT, () => {
  console.log(`Associations app listening on port ${process.env.APP_PORT}`);
});

process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err);
  process.exit(1);
});
