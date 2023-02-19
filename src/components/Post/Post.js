import {Link} from 'react-router-dom'
import ShowComment from '../ShowComment/ShowComment'

export default function Post ({ post, deletePost }) {
    // console.log(post.comments)

    function showComment () {

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
            <button className='btn btn-primary mx-2 my-2'>Update</button>
        </Link>

        <label>Create Comment</label>
        <input type="text"/>
        <input type="submit"/>
        <ShowComment postComment = {post.comments} />

        </div>
        </>
    )
}