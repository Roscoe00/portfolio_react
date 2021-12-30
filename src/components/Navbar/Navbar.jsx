import React from 'react'
import "./Navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
   return (
      <nav className="nav">
         <h2 className="nav__name">R.Bull</h2>
         <div className="nav__links">
            <span className="nav__links-icon"><FontAwesomeIcon className='icon' icon={faBars} /></span>
            <span><a className="nav__links-title" href="about"> About Me</a></span>
            <span><a className="nav__links-title" href="experience">Experience</a></span>
            <span><a className="nav__links-title" href="projects">Projects</a></span>
            <span><a className="nav__links-title" href="contact">Contact</a></span>
         </div>
      </nav>
   )
}

export default Navbar
