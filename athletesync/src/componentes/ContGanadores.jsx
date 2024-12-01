import React from 'react';
import './Ganadores.css'
import Ganador from './Ganador';


let ganadorNatacion = {
    foto: '../img/usuario.png',
    lugar: 'Primer Lugar',
    tiempo:'15:36',
    nombre: 'Kian Vasquez'
}

function ContGanadores(){



    return(
        <div className='ganadores'>
        <Ganador infGanadores={ganadorNatacion}/>
        <Ganador infGanadores={ganadorNatacion}/>
        <Ganador infGanadores={ganadorNatacion}/>
        </div>
    )
};

export default ContGanadores