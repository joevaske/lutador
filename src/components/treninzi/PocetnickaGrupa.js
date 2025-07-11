import React from 'react';
import './PocetnickaGrupa.css';
import naslovnaSlika from '../../images/begginer_group_logo-min.webp';
import { SiBasicattentiontoken } from 'react-icons/si';
import { MdSportsMma } from 'react-icons/md';
import { GiThreeFriends } from 'react-icons/gi';
import { GiAllForOne } from 'react-icons/gi';

const PocetnickaGrupa = () => {
  return (
    <div className='pocetnicka-grupa'>
      <div className='pocetnicka-grupa-content'>
        <div className='pocetnicka-grupa-content-slika'>
          <img src={naslovnaSlika} alt='Lutador Bjj - pocetnicka grupa' />
          <div className='pocetnicka-grupa-content-slika-footer'>
            <p>
              Napravite prvi korak ka sticanju snage, veštine i novih
              prijateljsatava
            </p>
            <div className='pocetnicka-grupa-footer-buttons'>
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
      <div className='prateci-tekstovi'>
        <div className='prateci-tekstovi-tekst-1'>
          <p>
            <MdSportsMma className='prateci-tekstovi-icon' />
            Zakoračite u svet Borilačkih veština
          </p>
          <p>
            <SiBasicattentiontoken className='prateci-tekstovi-icon' />
            Naučite osnove Brazilske Džiudžice
          </p>

          <p>
            <GiThreeFriends className='prateci-tekstovi-icon' />
            Vežbajte u prijateljskoj atmosferi i bezbednom okruženju
          </p>
          <p>
            <GiAllForOne className='prateci-tekstovi-icon' />
            Klub je otvoren za sve bez obzira na godište i prethodno iskustvo
          </p>
        </div>
      </div>
    </div>
  );
};

export default PocetnickaGrupa;
