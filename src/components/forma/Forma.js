import React from 'react';
import './Forma.css';

const Forma = () => {
  return (
    <div className='lutador-forma'>
      <h2>Vaš Feedback</h2>
      <form action=''>
        {/*  <label for='fname'>First Name</label> */}
        <input
          type='text'
          id='fname'
          name='firstname'
          placeholder='Ime i prezime.'
        />
        {/*  <label for='fname'>Broj telefona</label> */}
        <input
          type='text'
          id='phone'
          name='phone'
          placeholder='Broj telefona..'
        />
        {/*   <label for='poruka'>Poruka</label> */}
        <textarea id='poruka' name='poruka' placeholder='Poruka..'></textarea>
        <input
          className='btn btn-small btn-primary'
          type='submit'
          value='Potvrdi'
        />
      </form>
    </div>
  );
};

export default Forma;
