import React from "react";
import "./web.css";

const Web = () => {
	return (
		<div className="web">
			<div className="web-option">
				<a href="#projects">
					<i className="fi-rr-edit-alt option-icon "></i>
					Projects
				</a>
			</div>
			<div className="web-option">
				<a href="#skills">
					<i className="fi-rr-dart option-icon "></i>
					Skills
				</a>
			</div>
			<div className="web-option">
				<a href="#contact">
					<i className="fi-rr-user option-icon"></i>
					Contact
				</a>
			</div>
			<div className="web-option">
				<a href="#resume">
					<i className="fi-rr-document option-icon "></i>
					Resume
				</a>
			</div>
		</div>
	);
};

export default Web;
