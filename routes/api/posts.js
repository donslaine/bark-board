const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')

router.post('/new', postsCtrl.createPost)


router.get("/all", postsCtrl.indexPost)


module.exports = router