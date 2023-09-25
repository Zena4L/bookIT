import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors/requestValidationError";
import User from "../models/user";
import { BadRequestError } from "../errors/badRequestError";

export const signin: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new RequestValidationError(errors.array()));
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return next(new BadRequestError("This Email already exist"));
  }

  const user = User.build({ email, password });
  await user.save();

  res.status(200).send(user);
};
