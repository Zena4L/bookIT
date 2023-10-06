import request from "supertest";
import app from "../../app";

it("has a route handler for /api/ticket", async () => {
  const response = await request(app).post("/api/ticket").send();
  expect(response.status).not.toEqual(404);
});
it("can only be accessed if the user is signed in", async () => {
  await request(app).post("/api/ticket").send({}).expect(401);
});
it("returns a status other than 401 if user is signed in", async () => {
  const response = await request(app)
    .post("/api/ticket")
    .set("Cookie", global.signin())
    .send({});
  console.log(response.get("Set-Cookie"));
  expect(response.status).not.toEqual(401);
});
