import React from 'react';
import './Adm.css'
import NavBar from '../componentes/NavBar';
import FooterAdm from '../componentes/FooterAdm';
import FormCompetencias from '../componentes/FormCompetencias';


function CrearCompetencia(){
    return(
        <div className='crearCompeencia'>
        <NavBar />
        <FormCompetencias />
        <FooterAdm />
        </div>
    )
};

export default CrearCompetencia