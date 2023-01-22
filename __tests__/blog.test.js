import request from 'supertest';
import app from '../index';
import dotenv from 'dotenv';

dotenv.config();

const newBlog = {
  title:"Rwandair",
  description:"rwandair is Rwanda national airline",
  content:"rwandair is Rwanda national airline rwandair is Rwanda national airline",

};
describe("POST /blogs", () => {
//   describe("New blog", () => {
    
        
// test('it should create blog', async () => {
 

//   const response = await request(app)
//     .post('/api/v1/blogs')
//     .send(newBlog)
//     .set('Authorization',process.env.token)
//   expect(response.status).toBe(200);
// });
    
// })

describe("list all blogs", () =>{
  test('It should return a list of blog', async () => {
    const response = await request(app)
    .get('/api/v1/blogs')
    expect(response.statusCode).toBe(200);
  });
})

// describe("Not existed user", () =>{
//   test('It should return a blog', async () => {
//     const response = await request(app)
//     .get('/api/v1/blogs/yu')
//     expect(response.statusCode).toBe(404);
//   });
// })

// describe("delete a user", () =>{
//   test('It should not delete an existed blog', async () => {
//     const response = await request(app)
//     .delete('/api/v1/blogs/id')
//     .send();
//     expect(response.statusCode).toBe(404);
//   });
// })


// describe("delete a user", () =>{
//   test('It should not delete an existed user', async () => {
//     const response = await request(app)
//     .delete('/api/v1/blog/id')
//     .send();
//     expect(response.statusCode).toBe(404);
//   });
// })

})

// describe('Test the blogs endpoint', () => {
    
//     test('It should create new blog', async () => {
//       const response = await request(app).post('/api/v1/blogs').send(blog);
//       expect(response.statusCode).toBe(201);
//     });
  

// test('It should return a list of blogs', async () => {
//   const response = await request(app).get('/api/v1/blogs');
//   expect(response.statusCode).toBe(200);
// });



// test('It should return an error for a non-existent blog with an invalid id', async () => {
//   const response = await request(app).get('/api/v1/blogs/999');
//   expect(response.statusCode).toBe(500);
// });
// test('It should return an error for a non-existent blog with a valid id', async () => {
//   const response = await request(app).get('/api/v1/blogs/63bd6994134b021a1021c89f');
//   expect(response.statusCode).toBe(404);
// });
// test('it should return a blog', async()=>{
//   const response = await request(app).get('/api/v1/blogs/63bd6994134b021a1021c89d');
//   expect(response.statusCode).toBe(200);
// });
// test('it should update blog', async() =>{
//   const response = await request(app).put('/api/v1/blogs/63bd6994134b021a1021c89d').send(updateblog);
//   expect(response.statusCode).toBe(200);
// })
// test('it should not update blog', async() =>{
//   const response = await request(app).put('/api/v1/blogs/63bd54db650dcc25fcf6ce9').send(updateblog);
//   expect(response.statusCode).toBe();
// })

// test('it should not delete blog', async() =>{
//   const response = await request(app).delete('/api/v1/blogs/63bd54db650dcc25fcf6ce9f');
//   expect(response.statusCode).toBe(404);
// })
// });
