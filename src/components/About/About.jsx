import React from 'react'
import "./About.scss"
import image from "../../assets/images/about_me.jpg"

const About = () => {
   return (
      <div className="about" id="about">
         <h2 className="about__title">About Me</h2>
         <div className="about__grid">
            <p className="about__paragraph-one"> Computers have been a huge part of my life,
             ever since my family got a windows 95 PC forever ago. Growing up with computers,
              they were a natural interest in my life and have ultimately become an area I 
              want to develop a career in.</p>
            <p className="about__paragraph-two">
               I decided to specifically persue coding and software development after 
               finishing a degree in mathematics, and really enjoying the use of programs 
               like MatLAB and R Studio. I joined the Technology Consultancy Programme ran 
               by _nology in order to gain the skills I needed to become a Software Engineer 
               and landed my first role at Unipart Rail as a Digital Solutions Developer.
            </p>
            <p className="about__paragraph-three">
               While there, I've learned learned new languages and programs, while building
                on the knowledge I gained from _nology. Now I'm looking for new role to apply
                 my skills and to continue improving as a junior software developer. 
            </p>
            <img className="about__image" src={image} alt="me" />
         </div>
      </div>
   )
}

export default About
