const Post = require("../../models/post")
const Comment = require("../../models/comment")

function createComment(req, res, next) {
  const comment = req.body.comments
  // comment.owner = req.user._id
  const postId = req.body.comments.postId
  Post.findById(postId)
  // .then(console.log(req.body.comments))
    .then((post) =>{
        post.comments.push(comment)
        return post.save()
    } )
    .then((post) => {
      res.status(201).json({ post: post })
    })
    .catch(next)
}

function deleteComment(req, res, next) {
  // const comment = req.body.comments
  // comment.owner = req.user._id
  const commentId = req.params.commentId
  const postId = req.body.comments.postId
  console.log(postId)
  Post.findById(postId)
    .then(post => {
      post.comments.id(commentId).remove()
      // console.log(post)
      // post.comments.forEach(index => {
      //   if (index.id === commentId) {
      //     index.remove()
      //   }
      // })
      return post.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = {
  createComment,
  deleteComment
}