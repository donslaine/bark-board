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

function indexPost (req, res, next){
    // console.log(req)
    Post.find()
        .then((posts) => {
            // console.log(posts)
            return posts.map((posts) => posts)
        })
        .then((posts) => {
            return res.status(200).json({ posts: posts })
        })
        .catch(next)
}

module.exports = { 
    createPost,
    deletePost,
    indexPost
 }
