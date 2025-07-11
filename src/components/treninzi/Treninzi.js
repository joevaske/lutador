import React from 'react';
import './Treninzi.css';
import PocetnickaGrupa from './PocetnickaGrupa';
import NaprednaGrupa from './NaprednaGrupa';

const Treninzi = () => {
  return (
    <div className='treninzi'>
      <PocetnickaGrupa />
      <NaprednaGrupa />
    </div>
  );
};

export default Treninzi;
