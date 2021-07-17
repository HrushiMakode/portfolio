import React from "react";
import Separator from "../../common/Separator";
import { WorkData } from "../../../data/work";
import WorkCard from "./WorkCard";
import "./work.css";

const Work = () => {
	const data = WorkData;

	return (
		<div className="work">
			<Separator />
			<label className="section-title">Work</label>
			<div className="work-list">
				{data.map((item) => {
					return <WorkCard item={item} />;
				})}
			</div>
		</div>
	);
};

export default Work;
