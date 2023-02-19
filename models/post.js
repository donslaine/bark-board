const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commentSchema = require("./comment")

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        category:{
            type: String,
            required: false
        },
        // sortOrder: {
        //     type: Date,
        //     required: true
        // },
        pet: {
            type: String,
            required: true
        },
        // owner: {
        //     type: Schema.Types.ObjectId,
		// 	ref: 'User',
		// 	required: true,
        // },
        comments: [commentSchema]
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Post', postSchema)