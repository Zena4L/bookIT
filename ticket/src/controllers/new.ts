import { RequestHandler } from "express";

export const createTicket: RequestHandler = async (req, res, next) => {
  console.log(req.session);
  res.status(200).send("hello");
};
