import { RequestHandler } from "express";

export const currentuser: RequestHandler = (req, res, next) => {
  res.send({ currentUser: req.currentUser || null });
};
