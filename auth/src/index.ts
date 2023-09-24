import express, { json } from "express";
import { signin } from "./routes/signin";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(json());

app.use(signin);

app.use(errorHandler);

export default app;
