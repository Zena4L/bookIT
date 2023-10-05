import app from "./app";
import { createServer } from "http";
import mongoose from "mongoose";

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Ticket Database connected");
    const server = createServer(app);
    server.listen(4000, () => {
      console.log("server is live on 4000");
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
