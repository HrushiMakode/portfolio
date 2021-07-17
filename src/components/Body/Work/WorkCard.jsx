import React from "react";
import "./work-card.css";
const WorkCard = ({ item }) => {
	return (
		<div className="work-card">
			<img src={item.companyLogo} alt={item.company} className="work-logo" />
			<div className="work-info">
				<div className="work-dates">
					<label>{`${item.dateJoining}-${item.dateEnd}`}</label>
				</div>
				<div className="work-desc">
					<p>{item.work}</p>
				</div>
			</div>
		</div>
	);
};

export default WorkCard;
