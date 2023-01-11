import responses from "./response";

const message = {
    "/api/v1/messages": {
        post: {
            tags: ["message"],
            summary: "This endpoint should create a message.",
            parameters: [
                {
                    in: "body",
                    name: "body",
                    required: true,
                    example:{
                        message:"gime your cv ",
                        email:"hello@gmail.com"
                    }
                },
            ],
            responses,
        },
        get: {
            tags: ["message"],
            summary: "This is a display of  all messages.",
            parameters: [],
            responses,
        },
    },

    "/api/v1/messages/{id}": {
        get: {
            tags: ["message"],
            summary: "This is a display of a single single message.",
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                }
            ],
            responses,
        },
        
    }
}


export default message;