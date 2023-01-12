import request from 'supertest';
import app from '../index';


describe("POST /login", () => {
  describe("given valid email and valid password", () => {
      test("200 status code response", async () => {
          const response = await request(app)
              .post("/api/v1/login")
              .send({
                email: 'clara@gmail.com',
                password: 'clara123',
              });
          expect(response.statusCode).toBe(200);
          // expect(response.body).toHaveProperty("user_token");
      });
  });

})

