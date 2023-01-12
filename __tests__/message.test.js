import app from '../index'
// import supertest, { Test } from 'supertest'
import { expect } from 'chai'
import request  from 'supertest'

describe("POST /messages", () =>{
  describe("Given a message and email", () =>{
    //status code 200
    test("Should respond with 200 status code",async () =>{
      const response = await request(app).post("api/v1/messages").send({
        email:"clara@gmail.com",
        message:"Hello bound"
      })
      expect(response.statusCode).toBe(200)
    })

  })

  describe("It should create new message", () =>{
    //status code 200
    test("Should respond with 200 status code",async () =>{
      const response = await request(app).post("api/v1/messages").send({
        email:"clara@gmail.com",
        message:"Hello bound"
      })
      expect(response.statusCode).toBe(201)
    })

  })

  describe("Given the email and message is missing", () =>{
//status code 400 with code error
  })
  describe("when the username and password is missing", () => {
    test("should respond with a status code of 400", async () => {
      const bodyData = [
        {email: "email"},
        {message: "message"},
        {}
      ]
      for (const body of bodyData) {
        const response = await request(app).post("api/v1/messsage").send(body)
        expect(response.statusCode).toBe(400)
      }
    })
  })
})

