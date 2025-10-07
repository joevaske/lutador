import React from 'react';
import Hero from '../hero/Hero';
import TreninziNaslovna from '../treninzi/TreninziNaslovna';
import Trener from '../trener/Trener';
import MobileMenu from '../main-menu/MobileMenu';
import BigBanner from '../big-banner/BigBanner';

const HomePage = () => {
  return (
    <div>
      <MobileMenu />
      <Hero />
      <Trener />
      <TreninziNaslovna />
      <BigBanner />
    </div>
  );
};

export default HomePage;
