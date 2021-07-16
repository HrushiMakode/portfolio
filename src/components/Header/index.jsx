import React, { useState } from "react";
import Web from "./web/index";
import Mobile from "./mobile/index";
import Hamburger from "hamburger-react";

import "./header.css";
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="header">
			<div className="logo"> Hrushikesh</div>
			<div className="menu">
				<div className="web-menu">
					<Web />
				</div>
				<div className="mobile-menu">
					<div className="menu-icon">
						<Hamburger
							size={24}
							color={isOpen ? "#A9A9A9" : "black"}
							toggled={isOpen}
							toggle={setIsOpen}
						/>
					</div>
					{isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
				</div>
			</div>
		</div>
	);
};

export default Header;
