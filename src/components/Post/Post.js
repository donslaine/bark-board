import { Link } from 'react-router-dom'
import { useState } from 'react'
import ShowComment from '../ShowComment/ShowComment'
import { createComment, deleteComment } from "../../utilities/comments-api.js"
export default function Post({ post, deletePost }) {


    const [commentsVisible, setCommentsVisible] = useState(false)

    function toggleCommentsVisible () {
        setCommentsVisible(!commentsVisible)
    }

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
            await createComment(formData)
            if (!commentsVisible) {
                toggleCommentsVisible()
            }
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
                <h2>{post.owner.name}</h2>
                <h3>{post.title}</h3>
                <p>{post.pet}</p>
                <p>{post.text}</p>
                <p>{post.category}</p>
                <button className='btn btn-danger mx-2 my-2' onClick={() => deletePost(post._id)}>Delete</button>
                <Link to={`/posts/${post._id}`} >
                    <button
                        className='btn btn-primary mx-2 my-2'
                    >Update</button>
                </Link>
                <button className ='btn btn-info mx-2 my-2' onClick ={toggleCommentsVisible}>Show Comments</button>
                <form>
                <div className='form-floating'>
                    <input
                    className='form-control'
                        type="text"
                        name="text"
                        onChange={onCommentChange}
                    />
                    <label className='form-label'>Create Comment</label>
                </div>
                <button
                className='btn btn-success'
                    type="submit"
                    onClick={onSubmit}
                >Create</button>
            </form>
            </div>

            
            {commentsVisible && <ShowComment
                postComment={post.comments}
                handleDeleteComment={handleDeleteComment}
            />}


        </>
    )
}