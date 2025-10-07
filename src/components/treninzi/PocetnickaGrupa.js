import React from 'react';
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import { useInView } from 'react-intersection-observer';

import './PocetnickaGrupa.css';
import naslovnaSlika from '../../images/begginer_group_logo-min.webp';
import { SiBasicattentiontoken } from 'react-icons/si';
import { MdSportsMma } from 'react-icons/md';
import { GiThreeFriends } from 'react-icons/gi';
import { GiAllForOne } from 'react-icons/gi';

const PocetnickaGrupa = ({
  selected,
  setSelectedPTrue,
  setSelectedPFalse,
  setSelectedP,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.1, // 10% visible
  });

  return (
    <div
      className={`pocetnicka-grupa ${inView ? 'animate' : ''}`}
      onMouseEnter={setSelectedPTrue}
      onMouseLeave={setSelectedPFalse}
    >
      <div className='pocetnicka-grupa-content'>
        <div className='pocetnicka-grupa-content-slika'>
          <img src={naslovnaSlika} alt='Lutador Bjj - pocetnicka grupa' />
          <div className='pocetnicka-grupa-content-slika-text'>
            <p>
              Napravite prvi korak ka sticanju snage, veštine i novih
              prijateljstava
            </p>
            {/*  <div ref={ref} className={`box ${inView ? 'animate' : ''}`}>
              Hello! Animate me.
            </div> */}
          </div>
        </div>
      </div>
      <div className={`prateci-tekstovi ${selected ? 'selected' : ''}`}>
        <div
          className={`prateci-tekstovi-tekst-1 ${selected ? 'selected' : ''}`}
        >
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
      <div
        className={`pocetnicka-grupa-footer-buttons ${
          selected ? 'selected' : ''
        }`}
      >
        <HashLink to='/#kontakt' className='btn btn-medium btn-primary'>
          Prijavi se odmah
        </HashLink>
        <Link to='/raspored-treninga' className='btn btn-medium btn-secondary'>
          Raspored treninga
        </Link>
      </div>
    </div>
  );
};

export default PocetnickaGrupa;
