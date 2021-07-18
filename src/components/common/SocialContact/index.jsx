import React from "react";
import "./social-contact.css";
import { SocialData } from "../../../data/social";

// @ Tooltip using tippy.js/react
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { hideAll } from "tippy.js";

const SocialContact = () => {
	const data = SocialData;

	return (
		<div className="social-contact">
			{data.map((item) => {
				return (
					<Tippy
						interactive={false}
						content={item.platform}
						key={item.platform}
						onShow={() => hideAll({ duration: 0 })}
					>
						<a href={item.link} target="_blank" rel="noopener noreferrer">
							<div className="social-icon-div">
								<img
									src={item.icon}
									className="social-icon"
									alt={item.platform}
								/>
							</div>
						</a>
					</Tippy>
				);
			})}
		</div>
	);
};

export default SocialContact;
