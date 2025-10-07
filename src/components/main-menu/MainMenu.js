import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../images/logo.webp';
import './MainMenu.css';

const MainMenu = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  /*   const handleClick = (event) => {
    // 👇️ Toggle isActive state on click
    setIsActive((current) => !current);
  }; */

  const handleMouseOver1 = (event) => {
    setIsActive1(true);
  };
  const handleMouseOut1 = (event) => {
    setIsActive1(false);
  };
  const handleMouseOver2 = (event) => {
    setIsActive2(true);
  };
  const handleMouseOut2 = (event) => {
    setIsActive2(false);
  };

  const handleMouseOver3 = (event) => {
    setIsActive3(true);
  };
  const handleMouseOut3 = (event) => {
    setIsActive3(false);
  };

  const handleMouseOver4 = (event) => {
    setIsActive4(true);
  };
  const handleMouseOut4 = (event) => {
    setIsActive4(false);
  };

  const handleMouseOver5 = (event) => {
    setIsActive5(true);
  };
  const handleMouseOut5 = (event) => {
    setIsActive5(false);
  };
  return (
    <div className='main-menu'>
      <ul className='main-menu-list'>
        <li>
          <Link
            to='/#header'
            onMouseOver={handleMouseOver1}
            onMouseOut={handleMouseOut1}
          >
            Početna
          </Link>
        </li>
        <li>
          <Link
            to='/#instruktori'
            onMouseOver={handleMouseOver2}
            onMouseOut={handleMouseOut2}
          >
            Instruktori
          </Link>
        </li>
        <li>
          <Link
            to='/'
            className='logo'
            onMouseOver={handleMouseOver3}
            onMouseOut={handleMouseOut3}
          >
            {' '}
            <img src={logo} alt='Lutador Logo' />
          </Link>
        </li>
        <li>
          <Link
            to='/#treninzi'
            onMouseOver={handleMouseOver4}
            onMouseOut={handleMouseOut4}
          >
            Treninzi
          </Link>
        </li>
        {/*  <li>
          <Link to='/#blog'>Blog</Link>
        </li> */}
        <li>
          <Link
            to='/#kontakt'
            onMouseOver={handleMouseOver5}
            onMouseOut={handleMouseOut5}
          >
            Kontakt
          </Link>
        </li>
      </ul>
      {/*   <div className='main-menu-hover'>
        <div className='wrap pocetna-wrap'>
          <span
            className={`pocetna-hover ${isActive1 ? 'animacija' : ''}`}
          ></span>
        </div>
        <div className='wrap instruktori-wrap'>
          <span
            className={`instruktori-hover ${isActive2 ? 'animacija' : ''}`}
          ></span>
        </div>
        <div className='wrap logo-wrap'>
          <span className={`logo-hover ${isActive3 ? 'animacija' : ''}`}></span>
        </div>
        <div className='wrap treninzi-wrap'>
          <span
            className={`treninzi-hover ${isActive4 ? 'animacija' : ''}`}
          ></span>
        </div>
        <div className='wrap kontakt-wrap'>
          <span
            className={`kontakt-hover ${isActive5 ? 'animacija' : ''}`}
          ></span>
        </div>
      </div> */}
    </div>
  );
};

export default MainMenu;
