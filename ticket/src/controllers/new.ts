import { RequestHandler } from "express";
import Ticket from "../models/new";

export const createTicket: RequestHandler = async (req, res, next) => {
  const { title, price } = req.body;
  const ticket = Ticket.build({
    title: "newTicket",
    price: 10,
  });
  await ticket.save();
  res.status(201).send(ticket);
};
