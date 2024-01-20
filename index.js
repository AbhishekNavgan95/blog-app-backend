const express = require("express")
const app = express();

// loading env variables
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

// importing api routes and mounting
const blogRoutes = require("./routes/blogRoutes")
app.use("/api", blogRoutes )

// connecting server
const connectToDB = require("./config/connectToDB")
connectToDB();

// server activated
app.listen(PORT, () => {
    console.log(`App is started at ${PORT}`)
})

//default action for default route /
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
})

// ---------------- created Routes --------------

// /api/dummy - for a dummy page -> GET

// /api/posts/create - for creating a new post -> POST 
// comment and likes arrays are initialized with empty arrays for a new post
// body : 
// {
//     "title": "this is a post 4",
//     "body": "this is comment 4"
// }

// /api/posts/remove - for removing a post along with all its comments and likes -> POST
// body : 
// {
//     "post" : "65ab7e1fb56a895f89616220"
// }

// /api/posts - for fetching all posts -> GET 

// /api/likes/like - for adding a like on a post -> POST 
// body : 
// {
//     "post": "65ab7e1fb56a895f89616220",
//     "user": "abhishek 2"
// }

// /api/likes/unlike- for removing a like from a post -> POST 
// body : 
// {
//     "post": "65ab7e1fb56a895f89616220",
//     "like": "65ab7e3ab56a895f8961622a"
// }

// /api/comment/create - for creating a new comment -> POST
// body : 
// {
//     "post" : "65ab7e1fb56a895f89616220",
//     "user" : "Abhishek 2",
//     "body" : "Comment to be delted"
// }

// /api/comment/remove - for removing a comment froma a post -> POST
// body : 
// {
//     "post" : "65ab7e1fb56a895f89616220",
//     "comment" : "65ab84c898e6f27a458541ab",
// }