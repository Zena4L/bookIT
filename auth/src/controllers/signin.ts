import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors/requestValidationError";

export const signin: RequestHandler = (req, res, next) => {
  const { email, password } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new RequestValidationError(errors.array()));
  }

  res.status(200).json({
    data: {
      email,
      password,
    },
  });
};
