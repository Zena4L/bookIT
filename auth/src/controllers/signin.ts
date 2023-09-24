import { RequestHandler } from "express";

export const signin: RequestHandler = (req, res, next) => {
  const { email, password } = req.body;

  res.status(200).json({
    data: {
      email,
      password,
    },
  });
};
