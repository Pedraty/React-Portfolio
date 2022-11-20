import React, {useState,} from 'react';
import Modal1 from './Modal.jsx';
import './Modal.css'

function Modal() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="Modal">
      <button onClick={() => setOpenModal(true)}>Modal</button>
      <Modal1 open={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  );
}

export default Modal;
