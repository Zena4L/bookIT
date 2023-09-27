import express, { json } from "express";
import { signup } from "./routes/signup";
import { signin } from "./routes/signin";
import { globalError } from "./middlewares/globalError";
import { NotFoundError } from "./errors/notFoundError";
import cookieSession from "cookie-session";
import "express-async-errors";

const app = express();

app.set("trust proxy", true);

app.use(json());

app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use(signup);
app.use(signin);

app.all("*", (req, res, next) => {
  return next(new NotFoundError(req));
});
app.use(globalError);

export default app;
