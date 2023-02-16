const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commentSchema = require("./comment")

const postSchema = new Schema(
    {
        Title: {
            type: String,
            required: true
        },
        Text: {
            type: String,
            required: true
        },
        Category:{
            type: String,
            required: false
        },
        SortOrder: {
            type: Date,
            required: true
        },
        Pet: {
            type: String,
            required: true
        },
        Owner: {
            type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
        },
        Comment: [commentSchema]
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Post', postSchema)