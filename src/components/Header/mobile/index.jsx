import React from "react";
import Hamburger from "hamburger-react";
import "./mobile.css";

const Mobile = ({ isOpen, setIsOpen }) => {
	return (
		<div className="mobile">
			<div className="close-icon">
				<Hamburger size={24} toggled={isOpen} toggle={setIsOpen} />
			</div>
			<div className="mobile-options">
				<div className="mobile-option">
					<a href="#project">
						<i class="fi-rr-edit-alt option-icon "></i>
						Projects
					</a>
				</div>
				<div className="mobile-option">
					<a href="#skills">
						<i class="fi-rr-dart option-icon "></i>
						Skills
					</a>
				</div>
				<div className="mobile-option">
					<a href="#work">
						<i class="fi-rr-laptop option-icon "></i>
						Work
					</a>
				</div>
				<div className="mobile-option">
					<a href="#resume">
						<i class="fi-rr-document option-icon "></i>
						Resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default Mobile;
