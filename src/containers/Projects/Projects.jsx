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

   const projectsLstConstructor = projects.map((project, index) => (
      <ProjectsCard title={project.title} description={project.description} image={imageArray[index]} imageDesc={project.imageInfo} URL={project.url} key={"project" + project.id} />
   ))

   // const projectsList = projectsLstConstructor.filter(projectsLstConstructor[counter])

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
   // console.log(projectsLstConstructor[1])


   return (
      <div className="projects">
         <h2 className="projects__title">Projects</h2>
         {projectsLstConstructor[counter]}
         <div className="projects__arrows">
            <svg onClick={handleDecrement} className="arrow" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
            <svg onClick={handleIncrement} className="arrow" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
         </div>
      </div>
   )
}

export default Projects
