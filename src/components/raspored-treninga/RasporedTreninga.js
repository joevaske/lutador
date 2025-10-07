import React from 'react';
import './RasporedTreninga.css';

const RasporedTreninga = () => {
  return (
    <div className='raspored-treninga'>
      <h1>Raspored Treninga</h1>
      <div className='schedule'>
        <div className='cell header'>Sat</div>
        <div className='cell header'>Ponedeljak</div>
        <div className='cell header'>Utorak</div>
        <div className='cell header'>Sreda</div>
        <div className='cell header'>Četvrtak</div>
        <div className='cell header'>Petak</div>
        <div className='cell header'>Subota</div>
        <div className='cell header'>Nedelja</div>

        {/* <div className='cell time'>10:00</div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>

        <div className='cell time'>11:00</div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>

        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div> */}

        <div className='cell time'>12:00</div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'>
          {' '}
          <div className='event purple'>
            Kick Boks<span>Sparing</span>
          </div>
        </div>
        <div className='cell'></div>

        {/* <div className='cell time'>13:00</div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>

        <div className='cell time'>14:00</div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>

        <div className='cell time'>15:00</div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>

        <div className='cell time'>16:00</div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>

        <div className='cell time'>17:00</div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>

        <div className='cell time'>18:00</div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div> */}

        <div className='cell time'>19:00</div>
        <div className='cell'>
          <div className='event brown tooltip'>
            Deca <span class='tooltiptext'>Deca - uzrast od 6 - 13 god</span>
            <span>Deca - uzrast od 6 - 13 god</span>
          </div>
        </div>
        <div className='cell'></div>
        <div className='cell'>
          <div className='event brown'>
            Deca <span>Deca - uzrast od 6 - 13 god</span>
          </div>
        </div>
        <div className='cell'></div>
        <div className='cell'>
          <div className='event brown'>
            Deca <span>Deca - uzrast od 6 - 13 god</span>
          </div>
        </div>
        <div className='cell'></div>
        <div className='cell'></div>

        <div className='cell time'>20:00</div>
        <div className='cell'>
          <div className='event yellow'>
            GI<span>GI - kimono (kimono je obavezan za trening)</span>
          </div>
        </div>
        <div className='cell'>
          <div className='event purple'>
            Kick boks<span>Kik boks - od 14. godina</span>
          </div>
        </div>
        <div className='cell'>
          <div className='event yellow'>
            GI<span>GI - kimono (kimono je obavezan za trening)</span>
          </div>
        </div>
        <div className='cell'>
          <div className='event purple'>
            Kick boks<span>Kik boks - od 14. godina</span>
          </div>
        </div>
        <div className='cell'>
          <div className='event yellow'>
            GI<span>GI - kimono (kimono je obavezan za trening)</span>
          </div>
        </div>
        <div className='cell'></div>

        <div className='cell'></div>

        <div className='cell time'>21:00</div>
        <div className='cell'>
          <div className='event blue'>
            NO GI<span>NO GI - bez kimona</span>
          </div>
        </div>
        <div className='cell'>
          <div className='event green'>
            DRILL<span>Tehnički trening - bez sparinga</span>
          </div>
        </div>
        <div className='cell'>
          <div className='event blue'>
            NO GI<span>NO GI - bez kimona</span>
          </div>
        </div>
        <div className='cell'>
          <div className='event green'>
            DRILL<span>Tehnički trening - bez sparinga</span>
          </div>
        </div>
        <div className='cell'>
          <div className='event blue'>
            NO GI<span>NO GI - bez kimona</span>
          </div>
        </div>
        <div className='cell'></div>
        <div className='cell'></div>
      </div>
    </div>
  );
};

export default RasporedTreninga;
