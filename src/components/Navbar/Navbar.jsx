import React from 'react'
import "./Navbar.scss"


const Navbar = () => {
   return (
      <nav className="nav">
         <h2 className="nav__name">R.Bull</h2>
         <div className="nav__links">
            {/* <span className="nav__links-icon"> */}
            <svg className="nav__links-icon icon" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
            {/* </span> */}
            <span><a className="nav__links-title" href="about"> About Me</a></span>
            <span><a className="nav__links-title" href="experience">Experience</a></span>
            <span><a className="nav__links-title" href="projects">Projects</a></span>
            <span><a className="nav__links-title" href="contact">Contact</a></span>
         </div>
      </nav>
   )
}

export default Navbar
