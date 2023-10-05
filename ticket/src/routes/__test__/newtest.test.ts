import request from "supertest";
import app from "../../app";

it("has a route handler for /api/ticket", async () => {
  const response = await request(app).post("/api/ticket").send();
  expect(response.status).not.toEqual(404);
});
