import React from 'react';
import './Mapa.css';

const Mapa = () => {
  return (
    <div className='mapa'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1666.8080701763088!2d20.463070261414014!3d44.814575837530334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3a389232f%3A0xe2ca697bc1d3a4cf!2sLutador%20Academy%20Brazilian%20Jiu%20Jitsu%20Serbia!5e0!3m2!1ssr!2srs!4v1750751383149!5m2!1ssr!2srs'
        width='100%'
        height='450'
        style={{ border: '0', filter: 'invert(90%) grayscale(1)' }}
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default Mapa;
