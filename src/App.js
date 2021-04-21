import { useState, useEffect } from "react";
import Landing from "./Components/Landing";
import Header from "./Components/Header";
import StatsPage from "./Components/Learn";
import HelpPage from "./Components/Contribute";
import ResourcePage from "./Components/Resources";
import Footer from "./Components/Footer";
import aos from "aos";
import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

function App() {
	const [width, setWidth] = useState(window.innerWidth);

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);

	useEffect(() => {
		aos.init({
			duration: 800,
			once: true,
			offset: 200,
			easing: "ease-in-out-quat",
		});
	});

	let isMobile = width <= 992;
	return (
		<div className="App">
			<Header isMobile={isMobile}></Header>
			<Landing isMobile={isMobile}></Landing>
			<StatsPage isMobile={isMobile}></StatsPage>
			<HelpPage isMobile={isMobile}></HelpPage>
			<ResourcePage isMobile={isMobile}></ResourcePage>
			<Footer isMobile={isMobile}></Footer>
		</div>
	);
}

export default App;
