import MyNavBar from "./components/MyNavBar";
import "./App.css";
import HomeSection from "./components/HomeSection";
import "boxicons/css/boxicons.min.css";
import AnimationScreen from "./components/AnimationScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<AnimationScreen /> <MyNavBar />
							<HomeSection />
						</>
					}
				/>

				<Route
					path="/languages"
					element={
						<>
							<AnimationScreen />
							<MyNavBar />
							<Skills />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
