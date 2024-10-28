import React, { useState } from 'react';
import './navbar.css';
import Logo from '../images/logofull.png';
import LogoG from '../images/logog.gif';

function NavBar(props) {
  const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  return (
    <nav>
      <img
        src={isHovered ? LogoG : Logo}
        alt="logo"
        height="90px"
        width="150px"
        id="logo"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      />
      <ul className="menu">
        {/* <li>Home</li>
        <li>Services</li>
        <li>About</li> */}
        <li>
          {/* <button className="help">Help</button> */}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
