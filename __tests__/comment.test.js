import request from 'supertest';
import app from '../index';



describe("it should run create comment on blog", () => {
    describe("Wrong blog id", () => {
        test("400 status code and error message response", async () => {
            const response = await request(app)
                .post("/api/v1/blogs/63a37159f787285b272ded/comments")
                .send({
                    comment: "woww Awosome article",
                    email: "Peninangizwenayo@gmail.com",
                });

            expect(response.statusCode).toBe(404);
        });
    });
})

// describe("it should validate a valid comment and a valid email", () => {
//     let blogId = "";
//     beforeEach(async () => {
//         const response = await request(app).get("/api/v1/blogs/");
//         blogId = response.body.blog_list[0]._id;
//     });
//     test("200 status code and message", async () => {
//         const response = await request(app)
//             .post(`/api/v1/blogs/${blogId}/comments`)
//             .send({
//                 comment: "wow awosome article",
//                 email: "peninangizwenayo@gmail.com",
//             });
//             // await app.waitForTimeout(3000);
//         expect(response.statusCode).toBe(200);
//         expect(response.body.comment).toBeDefined();

//     });
// });

// describe(" invalid data valid blog", () => {
   
//     test("comment not in response", async () => {
//         const response = await request(app)
//             .delete(`/api/v1/blogs//comments/id`)
//             .send({
//                comment: "wow awosome article",
//                email: "peninangizwenayo@gmail.com",
//             });
//         expect(response.body.comment).not.toBeDefined();
//         expect(response.statusCode).toBe(400);
//         expect(response.body).toHaveProperty("error");
//     });
// });

