import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { TfiClose, TfiMenu } from 'react-icons/tfi';

import './MobileMenu.css';

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className='mobile-menu'>
      {openMenu === true && (
        <div className='mobile-menu-wrapper'>
          <ul className='mobile-menu-list'>
            <li>
              <Link to='/#header'>Početna</Link>
            </li>
            <li>
              <Link to='/#instruktori'>Instruktori</Link>
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
      )}
      <div className='mobile-menu-open-close' onClick={handleClick}>
        <TfiClose
          className={`close-menu ${openMenu ? 'active' : 'invisible'}`}
        />
        <TfiMenu className={`open-menu ${openMenu ? 'invisible' : 'active'}`} />
      </div>
    </div>
  );
};

export default MobileMenu;
