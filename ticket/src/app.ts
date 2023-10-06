import express, { json } from "express";
import { createTicket } from "./routes/new";
import { showTicket } from "./routes/show";
import {
  NotFoundError,
  globalError,
  currentUser,
} from "@zetonticket/resources";
import cookieSession from "cookie-session";
import "express-async-errors";

const app = express();
app.set("trust proxy", true);

app.use(json());

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(currentUser);

app.use(createTicket);
app.use(showTicket);

app.all("*", (req, res, next) => {
  return next(new NotFoundError(req));
});

app.use(globalError);

export default app;
