const Post = require("../../models/post")
const Comment = require("../../models/comment")

function createComment(req, res, next) {
  const comment = req.body.comments
  const postId = req.body.comments.postId
  Post.findById(postId)
    .then((post) =>{
        post.comments.push(comment)
        return post.save()
    } )
    .then((post) => {
      res.status(201).json({ post: post })
    })
    .catch(next)
}

module.exports = {
  createComment,
}
