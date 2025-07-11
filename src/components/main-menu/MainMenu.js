import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../images/logo.webp';
import './MainMenu.css';

const MainMenu = () => {
  return (
    <div className='main-menu'>
      <ul>
        <li>
          <Link to='/#header'>Početna</Link>
        </li>
        <li>
          <Link to='/#instruktori'>Instruktori</Link>
        </li>
        <li>
          <Link to='/' className='logo'>
            {' '}
            <img src={logo} alt='Lutador Logo' />
          </Link>
        </li>
        <li>
          <Link to='/#treninzi'>Treninzi</Link>
        </li>
        {/*  <li>
          <Link to='/#blog'>Blog</Link>
        </li> */}
        <li>
          <Link to='/#kontakt'>Kontakt</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
