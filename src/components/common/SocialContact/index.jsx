import React from "react";
import "./social-contact.css";
import { SocialData } from "../../../data/social";

const SocialContact = () => {
	const data = SocialData;
	return (
		<div className="social-contact">
			{data.map((item) => {
				return (
					<a
						href={item.link}
						target="_blank"
						rel="noopener noreferrer"
						key={item.platform}
					>
						<div className="social-icon-div">
							<img
								src={item.icon}
								className="social-icon"
								alt={item.platform}
							/>
						</div>
					</a>
				);
			})}
		</div>
	);
};

export default SocialContact;
