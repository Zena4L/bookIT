import express, { json } from "express";
import { NotFoundError, globalError } from "@zetonticket/resources";

const app = express();

app.use(json());

app.get("/api/ticket/home", (req, res, next) => {
  res.status(200).send("Hi");
});

app.all("*", (req, res, next) => {
  return next(new NotFoundError(req));
});

app.use(globalError);

export default app;
