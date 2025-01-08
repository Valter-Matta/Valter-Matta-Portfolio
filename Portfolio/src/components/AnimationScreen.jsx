import "./AnimationScreen.css";

const AnimationScreen = () => {
	return (
		<div className="bars-animation">
			<div className="bars" style={{ "--i": 6 }}></div>
			<div className="bars" style={{ "--i": 5 }}></div>
			<div className="bars" style={{ "--i": 4 }}></div>
			<div className="bars" style={{ "--i": 3 }}></div>
			<div className="bars" style={{ "--i": 2 }}></div>
			<div className="bars" style={{ "--i": 1 }}></div>
		</div>
	);
};

export default AnimationScreen;
