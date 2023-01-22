import app from '../index'
import request  from 'supertest'

describe("POST /messages", () =>{
  describe("new mesasge  from new email", () => {   
    test('it should create a message', async () => {
      const messages = {
        email: 'new@gmail.com',
        message: 'Can we meet friday night at Onomo Hotel?'
      };
    
      const response = await request(app)
        .post('/api/v1/messages')
        .send(messages)
      expect(response.status).toBe(200);
    });
        
    })

    // describe("list all messages", () =>{
    //   test('It should return a list of messages', async () => {
    //     const response = await request(app)
    //     .get('/api/v1/messages')
    //     expect(response.statusCode).toBe(200);
    //   });
    // })
    

    // describe("Not existed message", () =>{
    //   test('It should not return a message', async () => {
    //     const response = await request(app)
    //     .get('/api/v1/messages/me')
    //     expect(response.statusCode).toBe(404);
    //   });
    // })
})

