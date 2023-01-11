import responses from "./response";

const user = {
    "/api/v1/users" : {
        get: {
            tags: ["users"],
            summary: "This is a display of all users.",
            responses,
        },
        post: {
            tags: ["users"],
            summary: "This end point should create a user.",
            parameters:[
                {
                in: "body",
                name: "body",
                required: true,
                example:{
                    names:"penine",
                    email:"penine@gmail.com",
                    password:"penine123",
                    role:"admin"
                }
                },
                
            ],
             
        
            responses,
        }
    },

    
    "/api/v1/users/{id}" : {
        patch: {
            tags: ["users"],
            summary: "This endpoint should update user.",
            
            // security: [{
            //   JWT: [],
            // }],
            parameters:[
               
                    {
                      in: 'path',
                      name: 'id',
                      required: true,
                    },
                    {
                      in: 'body',
                      name: 'body',
                      example:{
                        names:"penine",
                        email:"penine@gmail.com",
                        password:"penine123",
                        role:"admin"
                    }
                      
                    },
                    
                   
            ],
            responses,
        },
        delete: {
            tags: ["users"],
            summary: "This endpoint should delete a user.",
            parameters:[
                {
                in: "path",
                name: "id",
                required: true,
                }
            ],
            responses,
        },
        get: {
            tags: ["users"],
            summary: "This is a display of a single users.",
            parameters:[
                {
                in: "path",
                name: "id",
                required: true,
                }
            ],
            responses,
        }
    },
}


export default user;