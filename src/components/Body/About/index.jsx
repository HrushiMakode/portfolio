import React from "react";
import Hand from "./SVGs/Hand";
import Type from "./Type";
import HomeLogo from "../../../Assets/svgs/coder.svg";
import SocialContact from "../../common/SocialContact";
import "./about.css";

const About = () => {
	return (
		<div className="about">
			<div className="about-top">
				<div className="about-info">
					Hi! There, <Hand size={45} classes="wave" /> <br />
					<span className="info-name">
						I'M <span className="my-name">HRUSHIKESH MAKODE</span>
					</span>
					<div className="typing">
						<Type />
					</div>
					<div className="info-buttons">
						<a href="#hire">
							<div className="hire btn-info ">Hire Me</div>
						</a>
						<a href="#work">
							<div className="work btn-info">My Work</div>
						</a>
					</div>
				</div>
				<div className="about-photo">
					<img src={HomeLogo} alt="Home Logo" />
				</div>
			</div>
			<div className="about-bottom">
				<SocialContact />
			</div>
		</div>
	);
};

export default About;
