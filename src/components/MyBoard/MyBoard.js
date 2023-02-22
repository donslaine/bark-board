import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { indexMyBoard } from "../../utilities/posts-api";
import { createComment, deleteComment } from "../../utilities/comments-api.js";
import ShowComment from "../ShowComment/ShowComment";
export default function MyBoard({ post, setShowBoard, deletePost }) {
	const [commentsVisible, setCommentsVisible] = useState(false);

	function toggleCommentsVisible() {
		setCommentsVisible(!commentsVisible);
	}
	const [comment, setComment] = useState({
		text: "",
		postId: `${post._id}`,
	});

	function onCommentChange(event) {
		setComment({
			...comment,
			[event.target.name]: event.target.value,
			postId: `${post._id}`,
		});
	}

	async function onSubmit(event) {
		event.preventDefault();
		try {
			const formData = { ...comment };
			await createComment(formData)
				.then(() => {
					return indexMyBoard();
				})
				.then((res) => res.json())
				.then((resData) => setShowBoard(resData.posts));

			if (!commentsVisible) {
				toggleCommentsVisible();
				console.log("it worked!");
			}
		} catch (error) {
			console.error(error);
		}
	}

	function handleDeleteComment(event) {
		const deleteReq = { comments: { postId: post._id } };
		deleteComment(deleteReq, event.target.id)
			.then(() => {
				return indexMyBoard();
			})
			.then((res) => res.json())
			.then((resData) => setShowBoard(resData.posts));
	}
	return (
		<>
			<div className="container border rounded-2 shadow-sm mt-3 mb-3 Post">
				<h2>{post.owner.name}</h2>
				<hr />
				<div className="title-bar">
					<h3>{post.title}</h3>
					<p>{post.pet}</p>
				</div>
				<p className="post-body">{post.text}</p>
				<hr />
				<p>{post.category}</p>
				<hr />
				<button
					className="btn btn-danger mx-2 my-2 btn-sm"
					onClick={() => deletePost(post._id)}
				>
					<i class="bi bi-trash"></i>
				</button>
				<Link to={`/posts/${post._id}`}>
					<button
						className="btn btn-primary mx-2 my-2 btn-sm"
						data-bs-toggle="modal"
						data-bs-target="#update-modal"
					>
						Update <i class="bi bi-tools"></i>
					</button>
				</Link>
				<button
					className="btn btn-info btn-sm mx-2 my-2"
					onClick={toggleCommentsVisible}
				>
					Comments <i class="bi bi-search"></i>
				</button>
				<form>
					<div className="form-floating comment-text">
						<input
							className="form-control"
							type="text"
							name="text"
							onChange={onCommentChange}
						/>
						<label className="form-label">Comment</label>
					</div>
					<button
						className="btn btn-success btn-sm comment-button"
						type="submit"
						onClick={onSubmit}
					>
						<i class="bi bi-plus-square"></i>
					</button>
				</form>
			</div>

			{commentsVisible && (
				<ShowComment
					postComment={post.comments}
					handleDeleteComment={handleDeleteComment}
				/>
			)}
		</>
	);
}
