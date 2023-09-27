import { RequestHandler } from "express";
import { RequireAuth } from "../errors/requireAuth";

export const requireAuth: RequestHandler = (req, res, next) => {
  if (!req.currentUser) {
    return next(new RequireAuth());
  }
  next();
};
