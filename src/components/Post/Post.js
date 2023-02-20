import { Link } from 'react-router-dom'
import { useState } from 'react'
import ShowComment from '../ShowComment/ShowComment'
import { createComment, deleteComment } from "../../utilities/comments-api.js"
export default function Post({ post, deletePost }) {


    const [comment, setComment] = useState({
        text: "",
        postId: `${post._id}`
    })

    function onCommentChange(event) {
        setComment({
            ...comment,
            [event.target.name]: event.target.value,
            postId: `${post._id}`
        })
    }

    async function onSubmit(event) {
        event.preventDefault()
        try {
            const formData = { ...comment }
            console.log(formData)
            await createComment(formData)
        } catch (error) {
            console.error(error)
        }
    }

    function handleDeleteComment(event) {
        const deleteReq = { comments: { postId: post._id } }
        deleteComment(deleteReq, event.target.id)
    }

    return (
        <>
            <div className='container border rounded-2 shadow-sm mt-3 mb-3'>
                <h2>{post.title}</h2>
                <p>{post.pet}</p>
                <p>{post.text}</p>
                <p>{post.category}</p>
                <button className='btn btn-danger mx-2 my-2' onClick={() => deletePost(post._id)}>Delete</button>
                <Link to={`/posts/${post._id}`} >
                    <button
                        className='btn btn-primary mx-2 my-2'
                    >Update</button>
                </Link>

                <div>
                    <label>Create Comment</label>
                    <input
                        type="text"
                        name="text"
                        onChange={onCommentChange}
                    />
                    <button
                        type="submit"
                        onClick={onSubmit}
                    >Create</button>
                </div>
            </div>
            <ShowComment
                postComment={post.comments}
                handleDeleteComment={handleDeleteComment}
            />


        </>
    )
}