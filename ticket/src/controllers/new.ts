import { RequestHandler } from "express";
import Ticket from "../models/new";
import { TicketCreatetPublisher } from "../events/publishers/ticket-created-publisher";
import { nattsWrapper } from "../natsWrapper";

export const createTicket: RequestHandler = async (req, res, next) => {
  const { title, price } = req.body;
  const ticket = Ticket.build({
    title: "newTicket",
    price: 10,
  });
  await ticket.save();
  new TicketCreatetPublisher(nattsWrapper.client).publish({
    id: ticket.id,
    title: ticket.title,
    price: ticket.price,
    userId: req.currentUser!.id,
  });
  res.status(201).send(ticket);
};
