import app from "./app";
import { createServer } from "http";
import mongoose from "mongoose";
import { nattsWrapper } from "./natsWrapper";

const start = async () => {
  if (
    !process.env.JWT_KEY &&
    !process.env.MONGO_URI &&
    !process.env.NATS_CLUSTER_ID
  ) {
    throw new Error("No jwt key");
  }

  try {
    await nattsWrapper.connect(
      process.env.NATS_CLUSTER_ID as string,
      process.env.NATS_CLUSTER_ID as string,
      "http://nats-srv:4222"
    );
    nattsWrapper.client.on("close", () => {
      console.log("Closing Nats");
      process.exit();
    });
    process.on("SIGINT", () => nattsWrapper.client.close());
    process.on("SIGTERM", () => nattsWrapper.client.close());
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Auth Database Connected");
  } catch (err) {
    console.log(err);
  }
  const server = createServer(app);
  server.listen(4000, () => {
    console.log("server is live on port 4000");
  });
};

start();
