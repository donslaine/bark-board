
export default function Post ({ post }) {
    console.log(post)
    return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.pet}</p>
        <p>{post.text}</p>
        <p>{post.category}</p>
    </div>
    )
}