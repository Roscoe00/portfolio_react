import React from 'react'
import "./Experience.scss"


import css from "../../assets/images/css-logo.svg"
import js from "../../assets/images/js-logo.svg"
import sass from "../../assets/images/sass-logo.svg"
import boot from "../../assets/images/bootstrap-logo.svg"
import node from "../../assets/images/node-logo.svg"
import java from "../../assets/images/java-logo.svg"


const Experience = () => {
   return (
      <div className="experience">
         <h2 className="experience__heading">Experience</h2>
         <span className="experience__grid">
            {/* <img className="experience__logo experience__html" src={html5} alt="html5 logo" /> */}
            <svg className="experience__logo experience__html" viewBox="0 0 384 512"><path fill="currentColor" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>
            <img className="experience__logo experience__css" src={css} alt="css logo" />
            <img className="experience__logo experience__js" src={js} alt="javascript logo" />
            <img className="experience__logo experience__sass" src={sass} alt="sass logo" />
            <img className="experience__logo experience__boot" src={boot} alt="bootstrap logo" />
            <img className="experience__logo experience__java" src={java} alt="java logo" />
            <img className="experience__logo experience__node" src={node} alt="node logo" />
         </span>
      </div>
   )
}

export default Experience
