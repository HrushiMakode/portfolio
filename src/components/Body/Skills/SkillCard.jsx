import React from "react";
import "./skill-card.css";

const SkillCard = ({ skill }) => {
	return (
		<div className="skill-card">
			<div className="skill-icon">
				<img src={skill.icon} alt={skill.name} />
			</div>
			<label className="skill-name">{skill.name}</label>
		</div>
	);
};

export default SkillCard;
