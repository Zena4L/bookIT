import express, { json } from "express";
import { signin } from "./routes/signin";
import { globalError } from "./middlewares/globalError";

const app = express();

app.use(json());

app.use(signin);

app.use(globalError);

export default app;
