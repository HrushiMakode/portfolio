import React from "react";
import { ProjectsData } from "../../../data/projects";
import ProjectCard from "./ProjectCard";
import Separator from "../../common/Separator";
import "./projects.css";

const Projects = () => {
	const data = ProjectsData;
	return (
		<div className="projects">
			<Separator />
			<label className="section-title">Projects</label>
			<div>
				{data.map((project) => {
					return <ProjectCard project={project} key={project.id} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
