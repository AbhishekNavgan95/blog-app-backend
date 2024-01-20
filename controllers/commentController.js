// import required models
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// logic for the controller
// create comment
exports.createComment = async (req, res) => {
  try {
    // fetch data from req body
    const { post, user, body } = req.body;

    // create comment object
    const comment = new Comment({
      post,
      user,
      body,
    });
    // save created comment to db
    const savedComment = await comment.save();

    //find the post by ID, add the new comment
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    ).populate("likes")
      .populate("comments")
      .exec();

    res.status(200).json({
      success: true,
      data: updatedPost,
    });
  } catch (e) {
    res.status(500).json({
      error: "Error while creating comment",
    });
  }
};

// delete comment
exports.deleteComment = async (req, res) => {
  try {
    const { comment, post } = req.body;

    // deleting comment from comments collection
    const deletedComment = await Comment.findOneAndDelete({ _id: comment });

    // deleting comment from post
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { comments: deletedComment._id } },
      { new: true }
    )
      .populate("comments")
      .populate("likes")
      .exec();

    res.status(200).json({
      success: true,
      message: "comment deleted successfully",
      data: updatedPost,
    });
  } catch (e) {
    res.status(500).json({
      error: "Error while unliking post",
    });
  }
};
