import React from 'react'

const ProjectsCard = (props) => {
   const { title, description, image, imageDesc, URL } = props;

   return (
      <div>
         <a href={URL}><img src={image} alt={imageDesc} /></a>
         <h3>{title}</h3>
         <p>{description}</p>
      </div>
   )
}

export default ProjectsCard
