import React from 'react';
import promocao from './beer.jpg';


const Modal1 = ({ open, onClose }) => {
    if (!open) return null;
    return (    
        <div className='overlay' >
            <div className='modalContainer'>


                <div className='modalLeft'>
                    <img src={promocao} alt="Foto ilustrativa de cervejas em promoção" />

                </div>



                <div className="modalRight">
                        <button className="closeBtn" onClick={onClose}>X</button> 
                        <p className='span-1'>utilize o cupom e ganhe</p>      
                        <p className='span-2'>50% OFF</p>
                        <p className='span-3'>na sua primeira compra</p>
                        <div className="btn-box">
                            <button className="reclaim">Resgatar agora</button>
                            <button className="later">Talvez depois</button>   
                        </div>
                                      
                </div>



            </div>
        </div>
    )
}

export default Modal1