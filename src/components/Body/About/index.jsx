import React from "react";
import Type from "./Type";
import HomeLogo from "../../../Assets/svgs/coder.svg";
import Hand from "../../../Assets/svgs/hand.svg";
import SocialContact from "../../common/SocialContact";
import "./about.css";

const About = () => {
	return (
		<div className="about">
			<div className="about-top">
				<div className="about-info">
					Hi! There, <img src={Hand} alt="hand svg" className="wave" /> <br />
					<span className="info-name">
						I'M <span className="my-name">HRUSHIKESH MAKODE</span>
					</span>
					<div className="typing">
						<Type />
					</div>
					<div className="info-buttons">
						<a href="#hire">
							<div className="hireme btn-info ">Hire Me</div>
						</a>
						<a href="#work">
							<div className="mywork btn-info">My Work</div>
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
