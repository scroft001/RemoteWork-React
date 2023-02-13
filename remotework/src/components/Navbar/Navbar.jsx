import React from 'react';
import logo from '../../images/logo.svg';
import arrowUp from '../../images/icon-arrow-up.svg';
import arrowDown from '../../images/icon-arrow-down.svg';

import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <div className="navbar__left">
        <img src={logo} alt="company logo" />
        <ul>
          <li><a href='#'>Features <img src={arrowDown} alt="arrow up" /></a></li>
          <li><a href='#'>Company <img src={arrowDown} alt="arrow up" /></a></li>
          <li><a href='#'>Careers</a></li>
          <li><a href='#'>About</a></li>
        </ul>
      </div>
      <div className="navbar__right">
        <ul>
            <li><a href='#'>Login</a></li>
            <li id='registerButton'><a href='#'>Register</a></li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar