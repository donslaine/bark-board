const Post = require("../../models/post")
const Comment = require("../../models/comment")

function createComment(req, res, next) {
  const comment = req.body.comment

  const postId = req.body.comment.postId

  Post.findById(postId)
    .then((post) =>{
        post.comment.push(comment)
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
