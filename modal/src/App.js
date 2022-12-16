import React, {useState} from 'react';
import Modal from './Modal';
import './App.css'

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setOpenModal(true)}>Modal</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  );
}

export default App;
