const Post = require('../../models/post')

export async function createPost(req, res) {
    try {
        const post = await Post.create(req.body)
        res.json(post)
    } catch (error) {
        res.status(400).json(error)
    }
}