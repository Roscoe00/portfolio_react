import React from 'react'
import "./ProjectsCard.scss"

const ProjectsCard = (props) => {
   const { title, description, image, imageDesc, URL } = props;

   return (
      <div className='projects-card'>
         <a href={URL}><img className='projects-card__image' src={image} alt={imageDesc} /></a>
         <h3 className='projects-card__title'>{title}</h3>
         <p className='projects-card__description'>{description}</p>
      </div>
   )
}

export default ProjectsCard
