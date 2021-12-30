import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
   return (
      <nav className="nav">
         <h2 className="nav__name">R.Bull</h2>
         <div className="nav__links">
            {/* <img className="nav__links-icon" src="" alt="nav menu" /> */}
            <span className="nav__links-icon">&9776</span>
            <span><a className="nav__links-title" href="About"> About Me</a></span>
            <span><a className="nav__links-title" href="Experience">Experience</a></span>
            <span><a className="nav__links-title" href="Projects">Projects</a></span>
            <span><a className="nav__links-title" href="Contact">Contact</a></span>
         </div>
      </nav>
   )
}

export default Navbar
