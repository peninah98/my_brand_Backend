import responses from "./response";

const comment = {
    "/api/v1/comments" : {
        get: {
            tags: ["comments"],
            summary: "This is a display of all comments.",
            responses,
        }


    },

    "/api/v1/comments/{id}" : {
        get: {
            tags: ["comments"],
            summary: "This is a display of a single comments.",
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
    "/api/v1/comments/{id}" : {
        delete: {
            tags: ["comments"],
            summary: "This  endpoint should delete a comment.",
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

    "/api/v1/comments" : {
        post: {
            tags: ["comments"],
            summary: "This is creating a comments.",
            parameters:[
                {
                in: "formData",
                name: "comment",
                required: true,
                },
                {
                    in:"formdata",
                    name:"email",
                    required:true
                },
                {
                    in:"formData",
                    name:"blogId",
                    required:true
                }
            ],
            responses,
        }
    },

    "/api/v1/comments/{id}" : {
       patch: {
            tags: ["comments"],
            summary: "This end point should update comment.",
            parameters:[
                {
                in: "path",
                name: "id",
                required: true,
                },
                {
                    in:"formdata",
                    name:"email",
                   
                },
                {
                    in:"formData",
                    name:"blogId",
                   
                }
            ],
            responses,
        }
    },



    

    
}




export default comment;