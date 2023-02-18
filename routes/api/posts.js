const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')

router.post('/new', postsCtrl.createPost)
router.delete('/:id', postsCtrl.deletePost)
router.patch('/:id', postsCtrl.updatePost)



router.get('/all', postsCtrl.indexPost)


module.exports = router