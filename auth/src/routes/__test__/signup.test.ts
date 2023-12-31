import request from "supertest";
import app from "../../app";

describe("Test for email and password validation", () => {
  it("return with 400 on invalid email", async () => {
    const response = await request(app)
      .post("/api/users/signup")
      .send({
        email: "test",
      })
      .expect(400);
    return response;
  });
  it("return with 400 on invalid password", async () => {
    const response = await request(app)
      .post("/api/users/signup")
      .send({
        email: "test@test.com",
        password: "",
      })
      .expect(400);
    return response;
  });
  it("return with a 201 status code for valid email and password", async () => {
    const response = await request(app)
      .post("/api/users/signup")
      .send({
        email: "test@test.com",
        password: "password",
      })
      .expect(201);
    return response;
  });
  it("return with a 201 code when jwt is issued", async () => {
    const response = await request(app)
      .post("/api/users/signup")
      .send({
        email: "test@test.com",
        password: "password",
      })
      .expect(201);
    expect(response.get("Set-Cookie")).toBeDefined();
  });
  it("return with a 400 for duplicated email sign up", async () => {
    await request(app)
      .post("/api/users/signup")
      .send({
        email: "test@test.com",
        password: "password",
      })
      .expect(201);
    await request(app)
      .post("/api/users/signup")
      .send({
        email: "test@test.com",
        password: "password",
      })
      .expect(400);
  });
});
