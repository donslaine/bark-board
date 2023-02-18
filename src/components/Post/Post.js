
export default function Post ({ post, deletePost }) {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.pet}</p>
            <p>{post.text}</p>
            <p>{post.category}</p>
            <button onClick={() => deletePost(post._id)}>Delete</button>
        </div>
    )
}