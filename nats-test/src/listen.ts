import nats, { Message } from "node-nats-streaming";

import { randomBytes } from "crypto";

console.clear();

const stan = nats.connect("bookit", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

const options = stan
  .subscriptionOptions()
  .setManualAckMode(true)
  .setDeliverAllAvailable()
  .setDurableName("bookit");
stan.on("connect", () => {
  console.log("listener is on");
  stan.on("close", () => {
    console.log("Listenner is shuting down");
    process.exit();
  });
  const subscription = stan.subscribe("message:created", options);
  subscription.on("message", (msg: Message) => {
    console.log(
      `Event No# : ${msg.getSequence()},
      Data: ${msg.getData()}
      `
    );
    msg.ack();
  });
});

process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());
