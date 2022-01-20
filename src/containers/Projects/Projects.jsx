import React, { useState } from 'react'
import "./Projects.scss"
import ProjectsCard from '../../components/ProjectsCard/ProjectsCard';

import projects from "../../assets/data/projects";
import calculatorImage from "../../assets/images/calculator.png";
import snakesImage from "../../assets/images/snakes.png";
import morseImage from "../../assets/images/morse.png";
import ticketsImage from "../../assets/images/tickets.png";
import IPAImage from "../../assets/images/IPA.png";


const Projects = () => {

   const [counter, setCounter] = useState(0);
   const imageArray = [calculatorImage, snakesImage, morseImage, ticketsImage, IPAImage]
   const handleIncrement = () => {
      if (counter === imageArray.length - 1) {
         setCounter(0);
      } else {
         setCounter(counter + 1);
      }
   };

   const handleDecrement = () => {
      if (counter === 0) {
         setCounter(imageArray.length - 1);
      } else {
         setCounter(counter - 1);
      }
   };
   const projectsLstConstructor = projects.map((project, index) => (
      <ProjectsCard title={project.title} description={project.description} image={imageArray[index]} imageDesc={project.imageInfo} URL={project.url} key={"project" + project.id} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
   ))


   return (
      <div className="projects" id="projects">
         <h2 className="projects__title">Projects</h2>
         {projectsLstConstructor[counter]}
      </div >
   )
}

export default Projects
