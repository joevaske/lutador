import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      {/*     <div className='youtube element'>
        <FaYoutube /> Youtube
      </div>
      <div className='youtube element'>
        <FaInstagram />
        Instagram
      </div>
      <div className='youtube element'>
        <FaFacebook /> Facebook
      </div> */}
      <ul>
        <li>
          <a className='youtube' href='#'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <FaYoutube />
          </a>
        </li>
        <li>
          <a className='instagram' href='#'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <FaInstagram />
          </a>
        </li>
        <li>
          <a className='facebook' href='#'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <FaFacebook />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
