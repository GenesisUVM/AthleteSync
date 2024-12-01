import React from 'react';
import './Adm.css'
import NavBar from '../componentes/NavBar';
import FooterAdm from '../componentes/FooterAdm';
import ContGanadores from '../componentes/ContGanadores';



function Ganadores(){
    return(
        <div className='seccionGanadores'>
        <NavBar />
        <ContGanadores />
        <FooterAdm />
        </div>
    )
};

export default Ganadores