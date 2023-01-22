import request from 'supertest';
import app from '../index';


// describe("POST /login", () => {
//   describe("given valid email and valid password", () => {
//       test("200 status code response", async () => {
//           const response = await request(app)
//               .post("/api/v1/login")
//               .send({
//                 email: 'clara@gmail.com',
//                 password: 'clara123',
//               });
//           expect(response.statusCode).toBe(200);
//           // expect(response.body).toHaveProperty("user_token");
//       });
//   });

// })

describe("POST /login", () => {
  describe("given valid email and valid password", () => {
      test("200 status code response", async () => {
          const response = await request(app)
              .post("/api/v1/login")
              .send({
                  email: "steve@gmail.com",
                  password: "steve123",
              });
          expect(response.statusCode).toBe(200);
      });
  });

  describe("given invalid email or invalid password", () => {
      test("400 status code respons, error message and no token", async () => {
          const response = await request(app)
              .post("/api/v1/login")
              .send({ email: "rwanda@gmail.com", password: "milly@123" });

          expect(response.statusCode).toBe(400);
          
      });
  });

  describe("no email or no password given", () => {
      test("400 status code response", async () => {
          const response = await request(app)
              .post("/api/v1/login")
              .send({ password: "hello123" });

          expect(response.statusCode).toBe(400);
      });
  });
});

