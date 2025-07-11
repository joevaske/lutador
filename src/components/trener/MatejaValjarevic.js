import React from 'react';
import './MatejaValjarevic.css';
import slikaTrenera from '../../images/mateja_valjarevic_photo_type-min.webp';

const MatejaValjarevic = () => {
  return (
    <div className='mateja-valjarevic'>
      <div className='mateja-valjarevic-slika'>
        <img src={slikaTrenera} alt='' />
      </div>
      <div className='mateja-valjarevic-text'>
        <p>
          Mateja Valjarević je završio Sportsku akademiju u Beogradu i ima
          zvanje Višeg sportskog trenera. Od 2009. Mateja je nastavio svoje
          studije na Fakultetu za sport i fizičko vaspitanje u klasi za Džudo.
          Svoju trenersku karijeru u brazilskoj džiudžici započinje 2008. godine
          kada kao nosilac plavog pojasa, kao izuzetan tehničar, na preporuku
          svog tadašnjeg trenera (Jovana Žerjala) osniva svoj klub - Brazilski
          džiu džicu klub “Lutador”. U trenerskoj karijeri stvorio je mnogo
          uspešnih takmičara, osvajača brojnih medalja na turnirima u zemlji i
          inostranstvu.
        </p>
        <p>
          Crni pojas - III stepen Jedini verifikovani profesor od strane IBJJF-a
          u Srbiji Glavni instruktor za Brazilski Džiu Džicu i Grapling Aktivan
          takmičar
        </p>
      </div>
    </div>
  );
};

export default MatejaValjarevic;
