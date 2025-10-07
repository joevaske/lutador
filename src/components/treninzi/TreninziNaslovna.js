import React, { useCallback, useState } from 'react';
import './TreninziNaslovna.css';
import PocetnickaGrupa from './PocetnickaGrupa';
import NaprednaGrupa from './NaprednaGrupa';

const Treninzi = () => {
  const [selectedN, setSelectedN] = useState(false);
  const [selectedP, setSelectedP] = useState(false);

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

  const setSelectedPFalse = useCallback(() => {
    setSelectedP(false);
  });
  const setSelectedPTrue = useCallback(() => {
    setSelectedP(true);
  });

  return (
    <div className='treninzi' id='treninzi'>
      <PocetnickaGrupa
        selected={selectedN}
        setSelectedP={setSelectedP}
        setSelectedPFalse={setSelectedPFalse}
        setSelectedPTrue={setSelectedPTrue}
      />
      <NaprednaGrupa
        selected={selectedP}
        setSelected={setSelectedN}
        setSelectedFalse={setSelectedFalse}
        setSelectedTrue={setSelectedTrue}
      />
    </div>
  );
};

export default Treninzi;
