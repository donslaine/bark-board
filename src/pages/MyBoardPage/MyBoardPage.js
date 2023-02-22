import MyBoard from "../../components/MyBoard/MyBoard";
import { useEffect, useState } from "react";
import { indexMyBoard } from "../../utilities/posts-api";
import { useParams } from "react-router-dom";
import { removePost } from "../../utilities/posts-api";

export default function MyBoardPage() {
	const { userId } = useParams();

	const [showBoard, setShowBoard] = useState([]);

	useEffect(() => {
		indexMyBoard(userId)
			.then((res) => res.json())
			.then((resData) => setShowBoard(resData.posts));
	}, []);

	function deletePost(id) {
		removePost(id)
			.then(() => {
				return indexMyBoard();
			})
			.then((res) => res.json())
			.then((resData) => setShowBoard(resData.posts));
	}

	if (showBoard === undefined) {
		return <h1>Loading...</h1>;
	}
	const postMap = showBoard.map((post, index) => (
		<MyBoard
			post={post}
			key={index}
			deletePost={deletePost}
			indexMyBoard={indexMyBoard}
			setShowBoard={setShowBoard}
		/>
	));

	return (
		<div className="container-sm">
			<h1 className="my-2">My Board</h1>
			{postMap}
		</div>
	);
}
