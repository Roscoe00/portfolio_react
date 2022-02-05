import React from 'react';
import { HashLink } from "react-router-hash-link";

import "./Navlinks.scss"

const Navlinks = (props) => {
   const { scrollWithOffset, onClickEffects } = props;

   return <div className="nav-links">
      <HashLink className="nav-links-title" scroll={scrollWithOffset} to={`/#about`} onClick={onClickEffects}> About Me</HashLink>
      <HashLink className="nav-links-title" scroll={scrollWithOffset} to={`#experience`} onClick={onClickEffects}>Experience</HashLink>
      <HashLink className="nav-links-title" scroll={scrollWithOffset} to={`#projects`} onClick={onClickEffects}>Projects</HashLink>
      <HashLink className="nav-links-title" scroll={scrollWithOffset} to={`#contact`} onClick={onClickEffects}>Contact</HashLink>
   </div>;
};

export default Navlinks;