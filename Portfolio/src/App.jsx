import MyNavBar from "./components/MyNavBar";
import "./App.css";
import HomeSection from "./components/HomeSection";
import "boxicons/css/boxicons.min.css";
import AnimationScreen from "./components/AnimationScreen";

function App() {
	return (
		<>
			<AnimationScreen />
			<MyNavBar />
			<HomeSection />
		</>
	);
}

export default App;
