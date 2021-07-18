import React from "react";

import Wave from "react-wavify";

import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Work from "./Work";

import "./body.css";

const Body = () => {
	return (
		<div className="body">
			<Wave
				fill="#8a2be2"
				className="sea-wave"
				paused={true}
				options={{
					height: 20,
					amplitude: 20,
					speed: 0.4,
					points: 4,
				}}
			/>
			<section id="about">
				<About />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section id="work">
				<Work />
			</section>
			<section id="skills">
				<Skills />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</div>
	);
};

export default Body;
