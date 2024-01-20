// import
const mongoose  = require("mongoose")

const commentSchema = new mongoose.Schema({
    post: {
        // this is a refference to post model
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    user: {
        type: String,
        required : true,
    },
    body : {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Comment", commentSchema);