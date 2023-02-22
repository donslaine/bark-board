import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import GlobalPage from "../GlobalPage/GlobalPage";
import UpdatePost from "../../components/UpdatePost/UpdatePost";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";
import { index } from "../../utilities/posts-api";
import MyBoardPage from "../MyBoardPage/MyBoardPage";

function App() {
	const [user, setUser] = useState(getUser());

	const [postList, setPostList] = useState([]);

	useEffect(() => {
		index()
			.then((res) => res.json())
			.then((resData) => setPostList(resData.posts));
	}, []);

	return (
		<main className="App">
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Routes>
						<Route path="/" element={<GlobalPage user={user} />} />
						<Route path="/posts" element={<GlobalPage user={user} />} />
						<Route
							path="/posts/:postId"
							element={<UpdatePost postList={postList} />}
						/>
						<Route
							path="/myboard/:userId"
							element={<MyBoardPage user={user} />}
						/>
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} user={user} />
			)}
		</main>
	);
}

export default App;
