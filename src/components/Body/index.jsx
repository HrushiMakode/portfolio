import React from "react";

import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Work from "./Work";

import "./body.css";

const Body = () => {
	return (
		<div className="body">
			<section id="about">
				<About />
			</section>
			<section id="work">
				<Work />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section id="skills">
				<Skills />
			</section>
			<section id="contacts">
				<Contact />
			</section>
		</div>
	);
};

export default Body;
