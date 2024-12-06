import React from 'react';
import './Adm.css'
import NavBar from '../componentes/NavBar';
import FooterAdm from '../componentes/FooterAdm';
import ContGanadores from '../componentes/ContGanadores';
import EnlaceTiempos from '../componentes/EnlaceTiempos';


function Ganadores(){
    return(
        <div className='seccionGanadores'>
        <NavBar />
        <ContGanadores />
        <EnlaceTiempos />
        <FooterAdm />
        </div>
    )
};

export default Ganadores