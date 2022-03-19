import React, { useState } from "react";
import Web from "./web/index";
import Mobile from "./mobile/index";
import Hamburger from "hamburger-react";
import DarkModeToggle from "react-dark-mode-toggle";
import "./header.css";

const Header = ({ isDarkMode, setIsDarkMode }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="header sticky">
			<div className="logo">HGM</div>
			<div className="mode-toggle">
				<DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={60}></DarkModeToggle>
			</div>
			<div className="menu">
				<div className="web-menu">
					<Web />
				</div>
				<div className="mobile-menu">
					<div className="menu-icon">
						<Hamburger size={24} color="var(--text-primary)" toggled={isOpen} toggle={setIsOpen} />
					</div>
					{isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
				</div>
			</div>
		</div>
	);
};

export default Header;
