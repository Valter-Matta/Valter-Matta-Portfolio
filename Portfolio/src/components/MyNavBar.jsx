import "./MyNavBar.css";

const MyNavBar = () => {
	return (
		<header className="flex justify-between text-[#ededed] fixed top-0 left-0 w-[100%] px-16 py-3 items-center">
			<a className="logo" href="">
				Valter.
			</a>
			<nav className="navbar flex justify-between ">
				<a className="active" href="">
					Home
				</a>
				<a href="">About</a>
				<a href="">Services</a>
				<a href="">Portfolio</a>
				<a href="">Contact</a>
			</nav>
		</header>
	);
};

export default MyNavBar;
