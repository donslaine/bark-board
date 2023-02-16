const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')

router.post('/', postsCtrl.createPost)

module.exports = router