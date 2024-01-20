const Like = require("../models/likeModel");
const Post = require("../models/postModel");

// like post
exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });
    const savedLike = await like.save();

    // update Post
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { likes: savedLike._id },
      },
      { new: true }
    )
      .populate("comments")
      .populate("likes")
      .exec();

    res.status(200).json({
      success: true,
      data: updatedPost,
    });
  } catch (e) {
    // send response as failed
    res.status(500).json({
      error: "Error while liking Post",
    });
  }
};

// unlike post
exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    // find and delete the like from likes collection
    const deletedLike = await Like.findOneAndDelete({ _id: like });

    // remove the like from the respective post in post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    )
      .populate("comments")
      .populate("likes")
      .exec();
    res.status(200).json({
      success: true,
      data: updatedPost,
    });
  } catch (e) {
    res.status(500).json({
      error: "Error while unliking post",
    });
  }
};
