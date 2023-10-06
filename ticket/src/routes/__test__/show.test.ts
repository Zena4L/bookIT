import request from "supertest";
import app from "../../app";
import { title } from "process";
import mongoose from "mongoose";

it("return a 404 if ticket is not found", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app).get(`/api/ticket/${id}`).send().expect(404);
});
it("return the if ticket is  found", async () => {
  const response = await request(app)
    .post("/api/ticket")
    .send({
      title: "Concept",
      price: 20,
    })
    .expect(201);

  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .expect(200);

  expect(ticketResponse.body.title).toEqual(title);
});
