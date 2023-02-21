import { Link } from 'react-router-dom'
import { useState } from 'react'
import ShowComment from '../ShowComment/ShowComment'
import { createComment, deleteComment } from "../../utilities/comments-api.js"
import { index } from '../../utilities/posts-api'
import './Post.css'


export default function Post({ post, deletePost, setPostArr, user }) {

    const [commentsVisible, setCommentsVisible] = useState(false)

    const [isPostOwned, setIsPostOwned] = useState(post.owner._id === user._id ? true : false)

    const [error, setError] = useState('')

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
                .then(() => {
                    return index()
                })
                .then((res)=> res.json())
                .then((resData) => setPostArr(resData.posts))

            if (!commentsVisible) {
                toggleCommentsVisible()
            }
        } catch (error) {
            console.error(error)
        }
    }

    function handlePermissionsError() {
        setError('You do not have permission to edit this')
    }

    function handleDeleteComment(event) {
        const deleteReq = { comments: { postId: post._id } }
        deleteComment(deleteReq, event.target.id)
            .then(console.log)
            .then(() => {
                return index()
            })
            .then((res)=> res.json())
            .then((resData) => setPostArr(resData.posts))
            
    }

    return (
        <>
            { isPostOwned ? 
            <>
                <div className='container border rounded-2 shadow-sm mt-3 mb-3 Post'>
                    <h2>{post.owner.name}</h2>
                    <hr/>
                    <div className='title-bar'>
                        <h3>{post.title}</h3>
                        <p>{post.pet}</p>
                    </div>
                    <p className='post-body'>{post.text}</p>
                    <hr/>
                    <p>{post.category}</p>
                    <hr/>
                    <div className='error-box'>
                        <p>{error}</p>
                    </div>
                    <button className='btn btn-danger mx-2 my-2 btn-sm' onClick={() => deletePost(post._id)}>Delete</button>
                    <Link to={`/posts/${post._id}`} >
                        <button
                            className='btn btn-primary mx-2 my-2 btn-sm'
                            data-bs-toggle="modal"
                            data-bs-target="#update-modal"
                        >Update</button>
                    </Link>
                    <button className ='btn btn-info mx-2 my-2' onClick ={toggleCommentsVisible}>Show Comments</button>
                    <form>
                        <div className='form-floating comment-text'>
                            <input
                            className='form-control'
                                type="text"
                                name="text"
                                onChange={onCommentChange}
                            />
                            <label className='form-label'>Comment</label>
                        </div>
                        <button
                        className='btn btn-success btn-sm comment-button'
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
             : 
             <>
            <div className='container border rounded-2 shadow-sm mt-3 mb-3 Post'>
                <h2>{post.owner.name}</h2>
                <hr/>
                <div className='title-bar'>
                    <h3>{post.title}</h3>
                    <p>{post.pet}</p>
                </div>
                <p className='post-body'>{post.text}</p>
                <hr/>
                <p>{post.category}</p>
                <hr/>
               
                {/* <button className='btn btn-danger mx-2 my-2 btn-sm' onClick={() => deletePost(post._id)}>Delete</button>

                <Link to={`/posts/${post._id}`} >
                    <button
                        className='btn btn-primary mx-2 my-2 btn-sm'
                        data-bs-toggle="modal"
                        data-bs-target="#update-modal"

                    >Update</button>
                </Link> */}
                <button className ='btn btn-info mx-2 my-2' onClick ={toggleCommentsVisible}>Show Comments</button>
                <form>
                    <div className='form-floating comment-text'>
                        <input
                        className='form-control'
                            type="text"
                            name="text"
                            onChange={onCommentChange}
                        />
                        <label className='form-label'>Comment</label>
                    </div>
                    <button
                    className='btn btn-success btn-sm comment-button'
                        type="submit"
                        onClick={onSubmit}
                    ><i class="bi bi-plus-square"></i></button>
                </form>
            </div>

            
            {commentsVisible && <ShowComment
                postComment={post.comments}
                handleDeleteComment={handleDeleteComment}
            />}
            </>
        }
        </>
    )
}