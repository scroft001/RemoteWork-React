import React, {useState} from 'react';
import logo from '../../images/logo.svg';
import arrowUp from '../../images/icon-arrow-up.svg';
import arrowDown from '../../images/icon-arrow-down.svg';
import Dropdown from '../DropDown/DropDown';

import './Navbar.scss'

const Navbar = () => {

  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const toggleFeatures = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  }

  const toggleCompany = () => {
    setIsCompanyOpen(!isCompanyOpen);
  }

  const featuresList = ["Todo List", "Calendar", "Reminders", "Planning"]
  const companyList = ["History", "Our Team", "Blog"]

  return (
    <nav>
      <div className="navbar__left">
        <img src={logo} alt="company logo" />
        <ul>
          <li>
            <a href='#' onClick={toggleFeatures}>
              Features {
              isFeaturesOpen? <img src={arrowUp} alt="arrow up" /> : <img src={arrowDown} alt="arrow down" />
            }</a>
            {isFeaturesOpen && <Dropdown items={featuresList} />}
          </li>
          <li>
            <a href='#' onClick={toggleCompany}>Company {
              isCompanyOpen? <img src={arrowUp} alt="arrow up" /> : <img src={arrowDown} alt="arrow down" />
            } </a>
            {isCompanyOpen && <Dropdown items={companyList} />}
          </li>
          <li><a href='index.html'>Careers</a></li>
          <li><a href='index.html'>About</a></li>
        </ul>
      </div>
      <div className="navbar__right">
        <ul>
            <li><a href='index.html'>Login</a></li>
            <li id='registerButton'><a href='index.html'>Register</a></li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar