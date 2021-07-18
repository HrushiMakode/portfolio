import React from "react";
import "./contact.css";
import Separator from "../../common/Separator";
import SocialContact from "../../common/SocialContact";

const Contact = () => {
	return (
		<div className="contact">
			<Separator />
			<label className="section-title">Contact</label>
			<div className="contact-container">
				<div className="contact-left">
					<p>Want to get in touch ? Contact me on any of the platform</p>
					<SocialContact />
				</div>
				<div className="download">
					<a
						href={require("../../../Assets/resume.pdf").default}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fi-rr-cloud-download download-icon"></i> Download
						Resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
