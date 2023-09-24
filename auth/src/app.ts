import express, { json } from "express";
import { signin } from "./routes/signin";
import { globalError } from "./middlewares/globalError";
import { NotFoundError } from "./errors/notFoundError";

const app = express();

app.use(json());

app.use(signin);

app.use(globalError);

app.all("*", (req, res, next) => {
  throw new NotFoundError(req);
});

export default app;
