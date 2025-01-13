import "./MyNavBar.css";
import { Link } from "react-router-dom";
const MyNavBar = () => {
	return (
		<header className="flex justify-between fixed top-0 left-0 w-[100%] px-16 py-3 items-center">
			<a className="logo" href="">
				Valter.
			</a>
			<nav className="navbar flex justify-between ">
				<Link to="/">
					<li className="active link" href="">
						Home
					</li>
				</Link>
				<Link to="/languages">
					<li className="link">Languages</li>
				</Link>
				<li className="link" href="">
					Services
				</li>

				<li className="link" href="">
					Portfolio
				</li>
				<li className="link" href="">
					Contact
				</li>
			</nav>
		</header>
	);
};

export default MyNavBar;
