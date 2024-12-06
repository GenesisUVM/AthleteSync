import React from 'react';
import './Usuario.css'
import NavBar from '../componentes/NavBar';
import FooterAdm from '../componentes/FooterAdm';
import FormRegistroAtletas from '../componentes/FormRegistroAtletas';

function RegistroAthletas(){
    return(
        <div className='registroAtletas'>
        <NavBar />
        <FormRegistroAtletas />
        <FooterAdm />
        </div>
    )
};

export default RegistroAthletas;