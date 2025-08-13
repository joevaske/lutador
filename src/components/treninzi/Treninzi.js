import React, { useCallback, useState } from 'react';
import './Treninzi.css';
import PocetnickaGrupa from './PocetnickaGrupa';
import NaprednaGrupa from './NaprednaGrupa';

const Treninzi = () => {
  const [selectedN, setSelectedN] = useState(false);

  /*   const handleHover = useCallback(() => {
    setSelectedN(!selectedN);
    console.log('Hovercina moja');
  }, [selectedN]);
 */

  const setSelectedFalse = useCallback(() => {
    setSelectedN(false);
  });
  const setSelectedTrue = useCallback(() => {
    setSelectedN(true);
  });

  return (
    <div className='treninzi'>
      <PocetnickaGrupa selected={selectedN} />
      <NaprednaGrupa
        selected={selectedN}
        setSelected={setSelectedN}
        setSelectedFalse={setSelectedFalse}
        setSelectedTrue={setSelectedTrue}
      />
    </div>
  );
};

export default Treninzi;
