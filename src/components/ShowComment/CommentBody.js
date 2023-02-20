import { useState } from "react"
import { deleteComment } from "../../utilities/comments-api"
export default function CommentBody({  post, text }) {
    // console.log(post._id)
    const [deleteAComment, setDeleteComment] = useState({
        postId: ``
    })
    // console.log(deleteAComment)


    function onCommentChange() {
        setDeleteComment({...deleteAComment, 
        postId: `${post._id}`
        })
    }

    async function onClick(event){
        event.preventDefault()
        try {
            const formData = {...deleteAComment}
            await deleteComment(formData)
        } catch (error){
            console.error(error)
        }
    }




    return (
        <>
        <p>{text}</p>
        <button
        onClick={onClick }
        onSubmit={onCommentChange}
        name="postId"
        >Delete Comment</button>
        </>
    )
}