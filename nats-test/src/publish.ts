import nats from "node-nats-streaming";
import { randomBytes } from "crypto";

console.clear();

const stan = nats.connect("bookit", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("publish is on");
  // can only send strings as data
  const testData = JSON.stringify({
    sender: "Clement",
    message: "this is a test",
  });

  stan.publish("message:created", testData);
});
