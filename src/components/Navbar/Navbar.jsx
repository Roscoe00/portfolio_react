import React, { useState, useEffect } from 'react'
import "./Navbar.scss"
import { HashLink } from "react-router-hash-link";

const Navbar = (props) => {
   const { scrollWithOffset } = props;

   const [isMobile, setIsMobile] = useState(false)
   const [displayNav, setDisplayNav] = useState(false)

   const openNav = () => {
      console.log(displayNav)
      setDisplayNav(!displayNav)
   }

   const handleResize = () => {
      if (window.innerWidth < 768) {
         setIsMobile(true)
      } else {
         setDisplayNav(true)
         setIsMobile(false)
      }
   }

   // create an event listener
   useEffect(() => {
      window.addEventListener("resize", handleResize)
   })


   return (
      <nav className="nav">
         <HashLink smooth to={`/#home`} className='nav__links-name' >
            <h2 className="nav__name">R.Bull</h2>
         </HashLink>
         <div className="nav__links">
            {isMobile &&
               <span onClick={openNav} >
                  <svg className="nav__links-icon icon" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
               </span>
            }
            {displayNav &&
               <span className='nav__links-titles'>
                  <HashLink className="nav__links-title" scroll={scrollWithOffset} to={`/#about`}> About Me</HashLink>
                  <HashLink className="nav__links-title" scroll={scrollWithOffset} to={`#experience`}>Experience</HashLink>
                  <HashLink className="nav__links-title" scroll={scrollWithOffset} to={`#projects`}>Projects</HashLink>
                  <HashLink className="nav__links-title" scroll={scrollWithOffset} to={`#contact`}>Contact</HashLink>
               </span>
            }
         </div>
      </nav>
   )
}

export default Navbar
