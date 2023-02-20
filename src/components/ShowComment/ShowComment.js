import CommentBody from "./CommentBody"


export default function ShowComment({ postComment, handleDeleteComment }) {
    let commentArr = postComment.map((comment, index) => (
        <CommentBody 
            key={index} 
            text={comment.text} 
            handleDeleteComment={handleDeleteComment}
            id={comment._id}
        /> 
    ))



    return(
        <div className="container-sm">
            <p>{commentArr}</p>
        </div>
    )
}