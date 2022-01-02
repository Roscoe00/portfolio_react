import React from 'react'
import "./Home.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
   return (
      <div className='home'>
         <header class="home__header">
            <h1 class="home__header-h1">Hello! I'm <span class="home__header-name">Roscoe
               Bull</span> and
               I'm a software developer.</h1>
            <a href="about" class="arrow-d"><FontAwesomeIcon className='icon' icon={faArrowDown} /></a>
         </header>
      </div>
   )
}

export default Home
