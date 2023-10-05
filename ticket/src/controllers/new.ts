import { RequestHandler } from "express";

export const createTicket: RequestHandler = async (req, res, next) => {
  res.status(200).send("hello");
};
