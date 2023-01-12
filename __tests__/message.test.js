import request from 'supertest';
import app from '../index';

const messageData = {
  email: 'peninangizwenayo@example.com',
  message: 'This is a test message'
};

describe('Test the message route', () => {
  test('It should send a message',  () => {
   
    const response =  request(app)
      .post('/api/v1/messages')
      .send(messageData);
    expect(response.statusCode).toBe(201);
  });

  test('It should  show list of  message',  () => {
    const response =  request(app)
      .post('/api/v1/messages')
      .send(messageData);
    expect(response.statusCode).toBe(200);
  });
});
