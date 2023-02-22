import './Comment.css'
import CommentBody from "./CommentBody"

export default function ShowComment({ postComment, handleDeleteComment }) {
    let commentArr = postComment.map((comment, index) => (
        <CommentBody 
            className='CommentBody'
            key={index} 
            text={comment.text} 
            handleDeleteComment={handleDeleteComment}
            id={comment._id}
            comment={comment}
        /> 
    ))

    return(
        <div className="container-sm">
            <>{commentArr}</>
        </div>
    )
}