import request from 'supertest';
import app from '../index';


const comment={
    comment:"hello",
    email:"peninangizwenayo@gmail.com",
    blogId:"63ad180133556c19785676b9"
}

describe('Test for comment endpoints',() => {
    test('It should create new comment', async () => {
        const response = await request(app)
        .post('/api/v1/comments')
        .send(comment);
        expect(response.statusCode).toBe(201);
      });
    
})