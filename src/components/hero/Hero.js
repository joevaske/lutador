import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../images/logo.webp';
import greetingImage from '../../images/header_logo-min-2.webp';
import { HiOutlineArrowDown } from 'react-icons/hi2';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='greeeting-image'>
        <img className='logo-mobile' src={logo} alt='Lutador Logo' />
        <img
          className='greeting'
          src={greetingImage}
          alt='Lutador Brazilian Jiu Jitsu'
        />
      </div>
      <div className='arrow-down-wrapper'>
        <Link to='#treninzi'>
          <HiOutlineArrowDown className='arrow-down' />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
