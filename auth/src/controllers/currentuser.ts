import { RequestHandler } from "express";

export const currentuser: RequestHandler = (req, res, next) => {
  res.status(200).send({ currentUser: req.currentUser || null });
};
