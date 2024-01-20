const express = require("express");
const router = express.Router();

// Impoerting controllers
const { dummy } = require("../controllers/dummyController");
const { createComment, deleteComment } = require("../controllers/commentController");
const { createPost, getAllPosts, removePost } = require("../controllers/postController");
const {likePost, unlikePost} = require("../controllers/likeController")

// mapping controllers to routes
router.get("/dummy", dummy);
router.post("/posts/create", createPost);
router.post("/posts/remove", removePost);
router.get("/posts", getAllPosts);
router.post("/comment/create", createComment);
router.post("/comment/remove", deleteComment);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

//export created routes
module.exports = router;