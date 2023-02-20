const express = require('express')
const router = express.Router()
const commentsCtrl = require("../../controllers/api/comments")

router.post("/new", commentsCtrl.createComment)
router.delete("/:id", commentsCtrl.deleteComment)

module.exports = router