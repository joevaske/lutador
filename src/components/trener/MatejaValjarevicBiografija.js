import React from 'react';
import './MatejaValjarevicBiografija.css';
import slikaTrenera from '../../images/mateja-profilna.webp';

const MatejaValjarevicBiografija = () => {
  return (
    <div className='mateja-valjarevic-biografija'>
      <div className='slika'>
        <img src={slikaTrenera} alt='Mateja Valjarevic - Lutador ' />
      </div>
      <div className='biografija'>
        <div className='izdvojeno'>
          <div className='pojas'>
            Crni pojas III stepen
            <span> Verifikovan strane IBJJF-a</span>
          </div>
          <div className='diplomirani'>
            Diplomirani Viši sportski trener{' '}
            <span> Sportska Akademija Beograd</span>
          </div>
          <div className='operativni'>
            Operativni JU JUTSU trener <span>TIMS Novi Sad</span>
          </div>
          <div className='licencirani'>
            Licencirani MMA trener <span> MMA Savez Srbije</span>
          </div>
        </div>
      </div>
      <div className='text'>
        <p>
          Svoju trenersku karijeru u Brazilskoj Džiu Džici započinje 2008.
          godine kada kao nosilac plavog pojasa, kao izuzetan tehničar, na
          preporuku svog tadašnjeg trenera (Jovana Žerjala) osniva svoj klub –
          Brazilski džiu džicu klub “Lutador”. U trenerskoj karijeri stvorio je
          mnogo uspešnih takmičara, osvajača brojnih medalja na turnirima u
          zemlji i inostranstvu.{' '}
          <strong>
            2013. Godine odlazi u Brazil i trenira dva meseca u prestižnoj
            Alliance BJJ akademiji Sao Paulo pod vođstvom jednog od najboljih
            BJJ trenera na svetu - Fabio Gurgel.
          </strong>
        </p>
        <p>
          Vraća se kao nosilac i{' '}
          <strong>glavni instruktor Alliance BJJ franšize za Srbiju</strong>.
          Implementira ceo sistem rada koji je naučuio u Brazilu i za kratko
          vreme LUTADOR BJJ postaje jedan od najtrofejnijih timova u zemlji i
          regionu.<strong>2015. Postaje deo Zenith</strong> asocijacije pod
          svetstim šampionima Robertom Drajzdelom i Rodrigo Kavakom.
        </p>
        <p>
          Po nalogu svetskog šampiona Roberta Drajzdela,{' '}
          <strong>
            prilkom posete Parizu promovisan je u crni pojas od strane Gorana
            Pejovića
          </strong>{' '}
          (crni pojas Roberta Drajzdela) i Žeremi Idlsa (crni pojas Roberta
          Drajzdela) u Kajyn BJJ akademiji 13.jula 2015.{' '}
          <strong>
            2019. Mateja registruje svoj tim Lutador BJJ u IBJJF-u
          </strong>{' '}
          (Internacionalna Brazilska Džiu Džicu Federacija) pod nazivom Lutador
          BJJ Academy – Serbia. I time se formira autentičan Srpski BJJ brend
          koji je priznat u celom svetu.
        </p>
      </div>
      <div className='rezultati'>
        <h3>Takmičarski rezultati, crni pojas</h3>
        <div className='rezultati-tabela'>
          <div className='rezultat'>
            <p>
              IBJJF Poznan Open 2016{' '}
              <span> Drugo mesto, -82.3kg crni pojas (adult division)</span>
            </p>
          </div>
          <div className='rezultat'>
            <p>
              IBJJF Paris Open 2017 (NO GI){' '}
              <span>Treće mesto, -82.3kg crni pojas (adult division)</span>
            </p>
          </div>
          <div className='rezultat'>
            <p>
              IBJJF Copenhagen Open 2018{' '}
              <span>Treće mesto, -76kg crni pojas (adult division)</span>
            </p>
          </div>
          <div className='rezultat'>
            <p>
              IBJJF Copenhagen Open 2018 (NO GI){' '}
              <span>
                Treće mesto - 79.5kg i drugo mesto apsolutnoj kategoriji crnih
                pojaseva (adult division)
              </span>
            </p>
          </div>
          <div className='rezultat'>
            <p>
              IBJJF Paris Open 2018{' '}
              <span>Drugo mesto, -82.3kg crni pojas (master 1 division)</span>
            </p>
          </div>
          <div className='rezultat'>
            <p>
              IBJJF Budapest Open 2019{' '}
              <span>Treće mesto, -76kg crni pojas (adult division)</span>
            </p>
          </div>
          <div className='rezultat'>
            <p>
              AJP Austria National Pro 2020{' '}
              <span>Drugo mesto -77kg crni pojas (adult division)</span>
            </p>
          </div>
          <div className='rezultat'>
            <p>
              AJP Serbia National Pro 2021{' '}
              <span>Treće mesto -77kg crni pojas (master 1 division)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatejaValjarevicBiografija;
