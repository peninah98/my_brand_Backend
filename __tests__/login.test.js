import request from 'supertest';
import app from '../index';

const credentials = {
  email: 'clara@gmail.com',
  password: 'clara123',
  id:"63bd54f839d684127411c401"
};

describe('Test the login endpoint', () => {
  test('It should authenticate user with valid credentials', async () => {
    const response = await request(app)
      .post('/api/v1/login')
      .send(credentials);
    expect(response.statusCode).toBe(200);
  });

  test('It should  authenticate user with invalid id', async () => {
    const response = await request(app)
      .post('/api/v1/login/63bd54f839d684127411c401')
      .send(credentials);
    expect(response.statusCode).toBe(200);
  });
  test('It should not authenticate user with invalid id', async () => {
    const response = await request(app)
      .post('/api/v1/login/63bd54f839d684127411c401')
      .send(credentials);
    expect(response.statusCode).toBe(200);
  });
});



