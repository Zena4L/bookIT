import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import { TicketCreatePublisher } from "./events/ticket-created-publisher";

console.clear();

const stan = nats.connect("bookit", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("publish is on");

  const publisher = new TicketCreatePublisher(stan);
  publisher.publish({
    id: "123",
    title: "concert",
    price: 20,
  });
});
