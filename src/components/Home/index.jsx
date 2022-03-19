import React from "react";
import { useState } from "react";
import { Header, Footer, Body } from "../index";
import "./home.css";

const Home = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	return (
		<div data-theme={isDarkMode ? "dark" : "light"} className="conatiner">
			<div className="home">
				<Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
				<Body />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
