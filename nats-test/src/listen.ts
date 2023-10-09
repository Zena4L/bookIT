import nats from "node-nats-streaming";
import { TicketCreatedListener } from "./events/ticket-created-event";

import { randomBytes } from "crypto";

console.clear();

const stan = nats.connect("bookit", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("listener is on");
  stan.on("close", () => {
    console.log("Listenner is shuting down");
    process.exit();
  });
  new TicketCreatedListener(stan).listen();
});

process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());
