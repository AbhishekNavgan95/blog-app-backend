const Post = require("../models/postModel");
const Comment = require("../models/commentModel");
const Like = require("../models/likeModel");

exports.createPost = async (req, res) => {
  try {
    // get data from req body
    const { title, body } = req.body;
    // create new Post from data
    const post = new Post({
      title,
      body,
    });
    // save created post into db
    const savedPost = await post.save();

    // send response as success
    res.status(200).json({
      success: true,
      data: savedPost,
    });
  } catch (e) {
    // send response as failed
    res.status(500).json({
      error: "Error while creating Post",
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("likes")
      .populate("comments")
      .exec();
    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (e) {
    // send response as failed
    res.status(500).json({
      error: "Error while fetching Post",
    });
  }
};

exports.removePost = async (req, res) => {
  try {
    const { post } = req.body;

    const deletedPost = await Post.findOneAndDelete({ _id: post });

    // Delete all likes associated with the deleted post
    await Like.deleteMany({ post: deletedPost._id });

    await Comment.deleteMany({ post: deletedPost._id });

    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (e) {
    // send response as failed
    res.status(500).json({
      error: "Error while removing a Post",
    });
  }
};
