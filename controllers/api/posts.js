const Post = require('../../models/post')

function createPost(req, res, next) {
    // const user = req.user._id
    console.log(req.body)
    const post = req.body
    console.log(post)
    // post.owner = req.user._id
    Post.create(post)
        .then((post) => {
            res.status(201).json({ post: post })
        })
        .catch(next)
}

function deletePost(req, res, next) {
    Post.findById(req.params.id)
        .then(post => {
            return post.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
}

module.exports = { 
    createPost,
    deletePost
 }