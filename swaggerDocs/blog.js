import responses from "./response";

const blog = {
    "/api/v1/blogs" : {
        get: {
            tags: ["blogs"],
            summary: "This is a display of all blogs.",
            responses,
        }
    },

    "/api/v1/blogs/{id}" : {
        get: {
            tags: ["blogs"],
            summary: "This is a display of a single blogs.",
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

    "/api/v1/blogs" : {
        post: {
            tags: ["blogs"],
            summary: "This is for creating a blogs.",
            security: [{
                JWT: [],
              }],
            parameters:[
                {
                in: "formData",
                name: "title",
                required: true,
                },
                {
                    in: "formData",
                    name: "description",
                    required: true,
                },

                {
                    in: "formData",
                    name: "content",
                    required: true,
                },
                {
                    in: "formData",
                    name: "image",
                    required: true,
                    type:"file"
                }
            ],
            responses,
        }
    },

    "/api/v1/blogs/{id}" : {
        delete: {
            tags: ["blogs"],
            summary: "This is a display of a single blogs.",
            security: [{
                JWT: [],
              }],
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

    "/api/blog/{id}":{
        "patch": {
          "tags": ["blogs"],
          "summary": "Updating blog",
            security: [{
              JWT: [],
            }],
            parameters: [
              {
                in: 'path',
                name: 'id',
                required: true,
              },
              {
                in: 'formData',
                name: 'title',
                
              },
              {
                in: 'formData',
                name: 'description',
                
              },
              {
                in: 'formData',
                name: 'content',
                
              },
              {
                name: 'image',
                in: 'formData',
                
                type: 'file',
              },
      
            ],
            responses,
        }
    }


}


export default blog;