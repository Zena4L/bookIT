import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "@zetonticket/resources";
import User from "../models/user";
import { BadRequestError } from "@zetonticket/resources";
import jwt from "jsonwebtoken";

export const signup: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return next(new BadRequestError("This Email already exist"));
  }

  const user = User.build({ email, password });
  await user.save();

  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_KEY!
  );

  req.session = {
    jwt: userJwt,
  };

  res.status(201).send(user);
};
