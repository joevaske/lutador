import React from 'react';

import greetingImage from '../../images/header_logo-min.webp';
import { HiOutlineArrowDown } from 'react-icons/hi2';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='greeeting-image'>
        <img src={greetingImage} alt='Lutador Brazilian Jiu Jitsu' />
      </div>
      <HiOutlineArrowDown className='arrow-down' />
    </div>
  );
};

export default Hero;
