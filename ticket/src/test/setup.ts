import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

let mongo: MongoMemoryServer;

declare global {
  function signin(): string[];
}

jest.mock("ticket/src/__mock__/nats-wrapper.ts");

beforeAll(async () => {
  process.env.JWT_KEY = "whatever";
  mongo = await MongoMemoryServer.create();
  const mongouri = mongo.getUri();

  await mongoose.connect(mongouri);
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany();
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = () => {
  // Build a jwt payload { id, email }
  const payload = {
    id: "12randomid",
    email: "test@test.com",
  };
  // Create the jwt
  const token = jwt.sign(payload, process.env.JWT_KEY!);
  // Build a session object { jwt: token }
  const session = { jwt: token };
  // Turn the session into JSON
  const sessionJSON = JSON.stringify(session);
  // Encode it as base64
  const base64 = Buffer.from(sessionJSON).toString("base64");
  // Return the cookie as a string with additional attributes
  return [`express:sess=${base64}`];
};
