import request from "supertest";
import app from "../../app";
import Ticket from "../../models/new";

it("has a route handler for /api/ticket", async () => {
  const response = await request(app).post("/api/ticket").send();
  expect(response.status).not.toEqual(404);
});

it("returns an error if an invalid title is provided", async () => {
  await request(app)
    .post("/api/ticket")
    .send({
      title: "",
      price: 10,
    })
    .expect(400);
});
it("returns an error if an invalid price is provided", async () => {
  await request(app)
    .post("/api/ticket")
    .send({
      title: "something",
      price: -10,
    })
    .expect(400);
  await request(app)
    .post("/api/ticket")
    .send({
      title: "something",
    })
    .expect(400);
});
it("creates a ticket with a valid inpits", async () => {
  let tickets = await Ticket.find({});
  expect(tickets.length).toEqual(0);

  await request(app)
    .post("/api/ticket")
    .send({
      title: "firstticket",
      price: 20,
    })
    .expect(201);

  tickets = await Ticket.find({});
  expect(tickets.length).toEqual(1);
});
