const Post = require('../../models/post')

// async function createPost(req, res) {
//     try {
//         const user = req.user._id
//         const post = await Post.create(req.body)
//         res.json(post)
//     } catch (error) {
//         res.status(400).json(error)
//     }
// }

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

module.exports = { createPost }