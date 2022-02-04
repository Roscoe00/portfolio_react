import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Navlinks from '../Navlinks/Navlinks';

const Navigation = (props) => {
   const { scrollWithOffset } = props;
   const [displayNav, setDisplayNav] = useState(false)
   const [activeMenu, setActiveMenu] = useState("")

   const openNav = () => {
      setDisplayNav(!displayNav)
   }

   const toggleMenu = () => {
      activeMenu === "" ? setActiveMenu("--active") : setActiveMenu("")
   }

   const onClickEffects = () => {
      toggleMenu()
      openNav()
   }

   return <div className="navigation">
      <Navbar scrollWithOffset={scrollWithOffset} onClickEffects={onClickEffects} activeMenu={activeMenu} />
      {displayNav && <Navlinks scrollWithOffset={scrollWithOffset} onClickEffects={onClickEffects} />
      }
   </div>;
};

export default Navigation;
