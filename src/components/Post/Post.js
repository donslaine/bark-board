import {Link} from 'react-router-dom'

export default function Post ({ post, deletePost }) {
    return (
        <>
        <div>
            <h2>{post.title}</h2>
            <p>{post.pet}</p>
            <p>{post.text}</p>
            <p>{post.category}</p>
        </div>
            <button onClick={() => deletePost(post._id)}>Delete</button>
        <Link to={`/posts/${post._id}`} >
            <button>Update</button>
        </Link>
        </>
    )
}