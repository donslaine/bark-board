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
            // required: true
        },
        category:{
            type: String,
            required: false
        },
        // SortOrder: {
        //     type: Date,
        //     required: true
        // },
        pet: {
            type: String,
            // required: true
        },
        // Owner: {
        //     type: Schema.Types.ObjectId,
		// 	ref: 'User',
		// 	required: true,
        // },
        comment: {
            type: [commentSchema.Schema],
            required: false
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Post', postSchema)