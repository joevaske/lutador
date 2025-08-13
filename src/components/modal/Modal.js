import React from 'react';
import { TfiClose, TfiMenu } from 'react-icons/tfi';

import './Modal.css';

const Modal = ({ handleClose, showModal, content }) => {
  return (
    <div className={`modal ${showModal ? 'active' : 'invisible'}`}>
      <div className='modal-backdrop' onClick={handleClose}></div>
      <div className='modal-content'>
        <span className='close'>
          {' '}
          <TfiClose onClick={handleClose} />
        </span>
        {/*  Content */}
        {content}
      </div>
    </div>
  );
};

export default Modal;
