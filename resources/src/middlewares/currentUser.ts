import { RequestHandler } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: Payload;
    }
  }
}

export const currentUser: RequestHandler = (req, res, next) => {
  if (!req.session?.jwt) {
    next();
  }
  try {
    const payload = verify(req.session?.jwt, process.env.JWT_KEY!) as Payload;
    req.currentUser = payload;
    console.log(req.currentUser);
  } catch (err) {
    console.log(err);
  }
  next();
};
