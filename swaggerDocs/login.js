import responses from "./response";

const login = {
    "/api/v1/login" : {
        get: {
            tags: ["login"],
            summary: " All logged in.",
            responses,
        }
    },

    "/api/v1/login" : {
        post: {
            tags: ["login"],
            summary: "This is loggin.",
            parameters:[
                {
                in: "body",
                name: "body",
                required: true,
                example:{
                    email:"clara@gmail.com",
                    password:"clara123"
                }
                },
                
            ],
            responses,
        }
    },

    
}


export default login;