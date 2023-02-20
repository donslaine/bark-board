export default function CommentBody({ text, handleDeleteComment, id }) {


    return (
        <>
        {text}
        <button onClick={handleDeleteComment} id={id}>Delete Comment</button>
        </>
    )
}