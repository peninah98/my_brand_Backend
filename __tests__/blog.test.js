import request from 'supertest';
import app from '../index';
import blog from '../controller/blog';
import { describe } from '@hapi/joi/lib/manifest';

const newBlog = {
    title:"Rwandair",
    description:"rwandair is Rwanda national airline",
    content:"rwandair is Rwanda national airline rwandair is Rwanda national airline",
    image:imageLink,
   

}

describe('Test the blogs endpoint', () => {
    
    test('It should create new blog', async () => {
      const response = await request(app).post('/api/v1/blogs').send(blog);
      expect(response.statusCode).toBe(201);
    });
  

test('It should return a list of blogs', async () => {
  const response = await request(app).get('/api/v1/blogs');
  expect(response.statusCode).toBe(200);
});



test('It should return an error for a non-existent blog with an invalid id', async () => {
  const response = await request(app).get('/api/v1/blogs/999');
  expect(response.statusCode).toBe(500);
});
test('It should return an error for a non-existent blog with a valid id', async () => {
  const response = await request(app).get('/api/v1/blogs/63bd6994134b021a1021c89f');
  expect(response.statusCode).toBe(404);
});
test('it should return a blog', async()=>{
  const response = await request(app).get('/api/v1/blogs/63bd6994134b021a1021c89d');
  expect(response.statusCode).toBe(200);
});
test('it should update blog', async() =>{
  const response = await request(app).put('/api/v1/blogs/63bd6994134b021a1021c89d').send(updateblog);
  expect(response.statusCode).toBe(200);
})
test('it should not update blog', async() =>{
  const response = await request(app).put('/api/v1/blogs/63bd54db650dcc25fcf6ce9').send(updateblog);
  expect(response.statusCode).toBe();
})

test('it should not delete blog', async() =>{
  const response = await request(app).delete('/api/v1/blogs/63bd54db650dcc25fcf6ce9f');
  expect(response.statusCode).toBe(404);
})
});
