const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')

router.post('/new', postsCtrl.createPost)
router.delete('/:id', postsCtrl.deletePost)

module.exports = router