import express, { json } from "express";
import { createTicket } from "./routes/new";
import { NotFoundError, globalError } from "@zetonticket/resources";
import "express-async-errors";

const app = express();

app.use(json());

app.use(createTicket);

app.all("*", (req, res, next) => {
  return next(new NotFoundError(req));
});

app.use(globalError);

export default app;
