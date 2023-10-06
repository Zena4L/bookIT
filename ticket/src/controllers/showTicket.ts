import { RequestHandler } from "express";
import Ticket from "../models/new";
import { NotFoundError } from "@zetonticket/resources";

export const show: RequestHandler = async (req, res, next) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    return new NotFoundError(req);
  }

  res.send(ticket);
};
