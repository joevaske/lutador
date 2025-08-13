import React, { useState } from 'react';
import './MatejaValjarevic.css';
import slikaTrenera from '../../images/mateja_valjarevic_photo_type-min.webp';

import Modal from '../modal/Modal';
import MatejaValjarevicBiografija from './MatejaValjarevicBiografija';

const MatejaValjarevic = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className='mateja-valjarevic'>
        <div className='mateja-valjarevic-slika'>
          <img src={slikaTrenera} alt='' />
        </div>
        <div className='mateja-valjarevic-text'>
          <p>
            <strong>Mateja Valjarević</strong> je završio Sportsku akademiju u
            Beogradu i ima zvanje Višeg sportskog trenera. Od 2009. Mateja je
            nastavio svoje studije na Fakultetu za sport i fizičko vaspitanje u
            klasi za Džudo. Trenersku karijeru u brazilskoj džiudžici započinje
            2008. godine kada kao nosilac plavog pojasa, kao izuzetan tehničar,
            na preporuku svog tadašnjeg trenera (Jovana Žerjala) osniva svoj
            klub - Brazilski džiu džicu klub “<strong>Lutador”</strong>.
          </p>
          <p>
            U trenerskoj karijeri stvorio je mnogo uspešnih takmičara, osvajača
            brojnih medalja na turnirima u zemlji i inostranstvu.
          </p>
          <p>
            Crni pojas - III stepen Jedini verifikovani profesor od strane
            IBJJF-a u Srbiji Glavni instruktor za Brazilski Džiu Džicu i
            Grapling Aktivan takmičar
          </p>
          <div className='read-more-button'>
            <button
              className='btn btn-medium btn-primary'
              onClick={() => setShowModal(true)}
            >
              Više informacija
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
          handleClose={handleClose}
          showModal={showModal}
          content={<MatejaValjarevicBiografija />}
        />
      )}
    </>
  );
};

export default MatejaValjarevic;
