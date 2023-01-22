import request from 'supertest';
import app from '../index';

const updateUser = {
  names:"clement rugwiro"
}

describe("POST /users", () => {
  describe("new email or password", () => {
    
        
test('it should create user', async () => {
  const user = {
    lastName: 'steve',
    firstName: 'Ndicunguye',
    email: 'steve@gmail.com',
    password: 'steve123',
    repeatPassword: 'steve123'
  };

  const response = await request(app)
    .post('/api/v1/users')
    .send(user)
  expect(response.status).toBe(201);
});
    
})

describe("list all users", () =>{
  test('It should return a list of users', async () => {
    const response = await request(app)
    .get('/api/v1/users')
    .send();
    expect(response.statusCode).toBe(200);
  });
})

describe("Not existed user", () =>{
  test('It should return a  user', async () => {
    const response = await request(app)
    .get('/api/v1/users/yu')
    .send();
    expect(response.statusCode).toBe(404);
  });
})

describe("delete a user", () =>{
  test('It should not delete an existed user', async () => {
    const response = await request(app)
    .delete('/api/v1/users/id')
    .send();
    expect(response.statusCode).toBe(404);
  });
})


// describe("delete a user", () =>{
//   test('It should not delete an existed user', async () => {
//     const response = await request(app)
//     .delete('/api/v1/users/id')
//     .send();
//     expect(response.statusCode).toBe(404);
//   });
// })

})

// 