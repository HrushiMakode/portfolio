import React from "react";
import "./web.css";

const Web = () => {
	return (
		<div className="web">
			<div className="web-option">
				<a href="#project">
					<i class="fi-rr-edit-alt option-icon "></i>
					Projects
				</a>
			</div>
			<div className="web-option">
				<a href="#skills">
					<i class="fi-rr-dart option-icon "></i>
					Skills
				</a>
			</div>
			<div className="web-option">
				<a href="#work">
					<i class="fi-rr-laptop option-icon "></i>
					Work
				</a>
			</div>
			<div className="web-option">
				<a href="#resume">
					<i class="fi-rr-document option-icon "></i>
					Resume
				</a>
			</div>
		</div>
	);
};

export default Web;
