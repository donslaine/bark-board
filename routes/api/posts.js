const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')
const Post = require('../../models/post')

router.post("/new",(req, res, next)=> {
    // const user = req.user._id
    const post = req.body.post
    // post.owner = user._id
    Post.create(req.body.post)
        .then((post) => {
            res.status(201).json({ post: post })
        })
        .catch(next)

}) 

module.exports = router