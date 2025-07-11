import React from 'react';
import './NaprednaGrupa.css';
import naslovnaSlika from '../../images/advanced_group-min.webp';

import { SiBasicattentiontoken } from 'react-icons/si';
import { MdSportsMma } from 'react-icons/md';
import { GiThreeFriends } from 'react-icons/gi';
import { GiAllForOne } from 'react-icons/gi';

const NaprednaGrupa = () => {
  return (
    <div className='napredna-grupa'>
      <div className='napredna-grupa-text'>
        <div className='napredna-grupa-text-tekst-1'>
          <p>
            <MdSportsMma className='napredna-grupa-text-icon' />
            Proniknite u tajne tehnika koje koriste svetski šampioni
          </p>
          <p>
            <SiBasicattentiontoken className='napredna-grupa-text-icon' />
            Pripremite se za učešće na prestižnim takmičenjima
          </p>

          <p>
            <GiThreeFriends className='napredna-grupa-text-icon' />
            Vežbajte sa našim najboljim borcima
          </p>
          <p>
            <GiAllForOne className='napredna-grupa-text-icon' />
            Klub je otvoren za sve bez obzira na godište i prethodno iskustvo
          </p>
        </div>
      </div>
      <div className='napredna-grupa-content'>
        <div className='napredna-grupa-content-slika'>
          <img src={naslovnaSlika} alt='Lutador Bjj - napredna grupa' />
          <div className='napredna-grupa-content-slika-footer'>
            <p>Pridruži se našoj naprednoj grupi</p>
            <div className='napredna-grupa-footer-buttons'>
              <button className='btn btn-medium btn-primary'>
                Prijavi se odmah
              </button>
              <button className='btn btn-medium btn-secondary'>
                Raspored treninga
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaprednaGrupa;
