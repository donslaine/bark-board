export default function CommentBody({ text, handleDeleteComment, id }) {


    return (
        <div className="border rounded-2 my-2">
        <div className="col my-1">
        {text}
        </div>
        <div className="col my-1">
        <button className="btn btn-danger" onClick={handleDeleteComment} id={id}>-</button>
        </div>
        </div>
    )
}