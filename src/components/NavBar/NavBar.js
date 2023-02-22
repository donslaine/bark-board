import { Link } from "react-router-dom";
import { useState } from "react";
import * as userService from "../../utilities/users-service";
import Pawprint from "../../Images/pawprint.png";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
	const [navMenu, setNavMenu] = useState(false);

	function handleLogOut() {
		userService.logOut();
		setUser(null);
	}
	return (
		<>
			<nav className="nav navbar navbar-static-top d-flex" role="navigation">
				<div className="logo justify-content-start">
					<div className="nav-link text-white" id="logo-name">
						BarkBoard
					</div>
					<img src={Pawprint} alt="pawprint" />
				</div>
				<div className="menu-container justify-content-end">
					<div className="navbar-menu">
						<button
							type="button"
							class="btn btn-secondary dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							id="collapse"
							onClick={() => setNavMenu((prevState) => !prevState)}
						>
							<i className="bi bi-list"></i>
						</button>
					</div>
				</div>
			</nav>
			{navMenu ? (
				<div
					className="menuLink collaspe navbar-collaspe"
					id="bs-example-navbar-collaspe-1"
				>
					<ul className="nav navbar-nav">
						<li>
							<a>
								<Link className="nav-link text-white" to="/posts">
									Discover <i className="bi bi-people"></i>
								</Link>
							</a>
						</li>
						<li>
							<a>
								<Link
									className="nav-link text-white"
									to={`/myboard/${user._id}`}
								>
									My Board <i className="bi bi-file-person-fill"></i>
								</Link>
							</a>
						</li>
						<li>
							<a>
								<Link
									className="nav-link text-white"
									to=""
									onClick={handleLogOut}
								>
									Log Out <i className="bi bi-box-arrow-right"></i>
								</Link>
							</a>
						</li>
					</ul>
				</div>
			) : (
				<></>
			)}
			<span className="mt-3">Hello there, {user.name}</span>
		</>
	);
}
