import app from "./app";
import { createServer } from "http";
import mongoose from "mongoose";

const start = async () => {
  if (!process.env.JWT_KEY && process.env.MONGO_URI) {
    throw new Error("No jwt key");
  }

  try {
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
