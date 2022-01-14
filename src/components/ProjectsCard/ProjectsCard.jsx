import React from 'react'
import "./ProjectsCard.scss"

const ProjectsCard = (props) => {
   const { title, description, image, imageDesc, URL, handleDecrement, handleIncrement } = props;

   return (
      <div className='projects-card'>
         <a href={URL}><img className='projects-card__image' src={image} alt={imageDesc} /></a>
         <div className='projects-card__header'>
            {/* <div className="projects__arrows"> */}
            <svg onClick={handleDecrement} className="arrow" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
            <h3 className='projects-card__title'>{title}</h3>
            <svg onClick={handleIncrement} className="arrow" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
         </div>
         {/* </div> */}
         <p className='projects-card__description'>{description}</p>
      </div>
   )
}

export default ProjectsCard
