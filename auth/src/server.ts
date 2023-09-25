import app from "./app";
import { createServer } from "http";
import mongoose from "mongoose";

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Database Connected");
  } catch (err) {
    console.log(err);
  }
  const server = createServer(app);
  server.listen(3000, () => {
    console.log("server is live on port 3000");
  });
};

start();
