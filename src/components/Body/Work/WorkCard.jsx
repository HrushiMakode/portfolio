import moment from "moment";
import React from "react";
import "./work-card.css";

const WorkCard = ({ item }) => {
	return (
		<div className="work-card">
			<img src={item.companyLogo} alt={item.company} className="work-logo" />
			<div className="work-info">
				<div className="work-dates">
					<label>{`${item.dateJoining}-${item.dateEnd} | ${getTotalPeriod(item.dateJoining, item.dateEnd)}`} </label>
				</div>
				<div className="work-desc">
					<p>{item.work}</p>
				</div>
			</div>
		</div>
	);
};

const getTotalPeriod = (joiningDate, endDate) => {
	joiningDate = new Date(joiningDate);
	endDate = endDate === "Present" ? new Date() : new Date(endDate);
	const date1 = moment(joiningDate.toDateString());
	const date2 = moment(endDate.toDateString());
	const diff = date1.diff(date2, "months");
	return `${Math.abs(diff) + 1} months`;
};

export default WorkCard;
