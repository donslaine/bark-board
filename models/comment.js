const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
    {
        Text: {
            type: String,
            required: true
        },
        Owner: {
            type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
        }
 
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Comment', commentSchema)