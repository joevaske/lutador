import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='youtube element'>
        <FaYoutube /> Youtube
      </div>
      <div className='youtube element'>
        <FaInstagram />
        Instagram
      </div>
      <div className='youtube element'>
        <FaFacebook /> Facebook
      </div>
    </div>
  );
};

export default Footer;
