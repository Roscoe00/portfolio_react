import React from 'react'
import "./Projects.scss"
import ProjectsCard from '../../components/ProjectsCard/ProjectsCard';

import projects from "../../assets/data/projects";
import calculatorImage from "../../assets/images/calculator.png";


const Projects = () => {

   const imageArray = [calculatorImage]

   const projectsList = projects.map((project, index) => (
      <ProjectsCard title={project.title} description={project.description} image={imageArray[index]} imageDesc={project.imageInfo} URL={project.url} />
   ))
   return (
      <div className="projects">
         <h2 className="projects__title">Projects</h2>
         <div className="projects__grid">
            {projectsList}
         </div>
      </div>
   )
}

export default Projects
