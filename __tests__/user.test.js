import request from 'supertest';
import app from '../index';
const user = {
    role: "admin",
    names: "clement",
    email: "clementhunk@gmail.com",
    password: "clement123"
}
const updateUser = {
  names:"clement rugwiro"
}

describe('Test the users endpoint', () => {
    
      test('It should create new user', async () => {
        const response = await request(app).post('/api/v1/users').send(user);
        expect(response.statusCode).toEqual(201);
      });
    

  test('It should return a list of users', async () => {
    const response = await request(app).get('/api/v1/users');
    expect(response.statusCode).toEqual(200);
  });

  

  test('It should return an error for a non-existent user with an invalid id', async () => {
    const response = await request(app).get('/api/v1/users/999');
    expect(response.statusCode).toEqual(500);
  });
  test('It should return an error for a non-existent user with a valid id', async () => {
    const response = await request(app).get('/api/v1/users/63bd6994134b021a1021c89f');
    expect(response.statusCode).toEqual(404);
  });
  test('it should return a user', async()=>{
    const response = await request(app).get('/api/v1/users/63bd6994134b021a1021c89d');
    expect(response.statusCode).toEqual(200);
    jest.setTimeout(() => {
      
    }, 15000);
  });
  test('it should update user', async() =>{
    const response = await request(app).put('/api/v1/users/63bd6994134b021a1021c89d').send(updateUser);
    expect(response.statusCode).toEqual(200);
  })
  test('it should not update user', async() =>{
    const response = await request(app).put('/api/v1/users/63bd54db650dcc25fcf6ce9').send(updateUser);
    expect(response.statusCode).toEqual(404);
  })
  // test('it should delete user', async() =>{
  //   const response = await request(app).delete('/api/v1/users/63bd6994134b021a1021c89d');
  //   expect(response.statusCode).toBe(204);
  // })
  test('it should not delete user', async() =>{
    const response = await request(app).delete('/api/v1/users/63bd54db650dcc25fcf6ce9f');
    expect(response.statusCode).toEqual(404);
  })
});
  