import request from "supertest";
import app from "../../app";

it("return a status code of 200 on signout", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  await request(app).get("/api/users/signout").expect(200);
});
