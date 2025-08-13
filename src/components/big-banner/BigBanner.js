import React from 'react';
import './BigBanner.css';

import bannerImage from '../../images/header_logo-min.webp';

const BigBanner = () => {
  return (
    <div className='big-banner'>
      {/*  <div className='image-wrapper'>
        <img src={bannerImage} alt='Lutador Brazilian jiu jitsu Beograd' />
      </div>{' '} */}

      <div className='scroll'>
        <div className='m-scroll'>
          <span>
            {' '}
            <img src={bannerImage} alt='Lutador Brazilian jiu jitsu Beograd' />
          </span>
          <span>
            {' '}
            <img src={bannerImage} alt='Lutador Brazilian jiu jitsu Beograd' />
          </span>
          <span>
            {' '}
            <img src={bannerImage} alt='Lutador Brazilian jiu jitsu Beograd' />
          </span>
          <span>
            {' '}
            <img src={bannerImage} alt='Lutador Brazilian jiu jitsu Beograd' />
          </span>
          <span>
            {' '}
            <img src={bannerImage} alt='Lutador Brazilian jiu jitsu Beograd' />
          </span>

          <span>
            {' '}
            <img src={bannerImage} alt='Lutador Brazilian jiu jitsu Beograd' />
          </span>
          <span>
            {' '}
            <img src={bannerImage} alt='Lutador Brazilian jiu jitsu Beograd' />
          </span>
          <span>
            {' '}
            <img src={bannerImage} alt='Lutador Brazilian jiu jitsu Beograd' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BigBanner;
