import React from 'react';
import './Usuario.css'
import NavBar from '../componentes/NavBar';
import FooterAdm from '../componentes/FooterAdm';
import ModalForm from '../componentes/ModalForm';

function RegistroAthletas(){
    return(
        <div className='registroAtletas'>
        <NavBar />
        <ModalForm />
        <FooterAdm />
        </div>
    )
};

export default RegistroAthletas;