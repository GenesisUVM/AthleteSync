import React from 'react';
import './Ganadores.css'
import foto from '../img/usuario.png'


function Ganador({competencia, lugar, tiempo, nombre}){

    return(
        <div>
        <div className='Ganador'>
            <img alt='Foto ganador' className='imgGanador' src={foto}/>
            <div className='textGanadores'>
                <p>{competencia}</p>
                <p>{lugar}</p>
                <p>{tiempo}</p>
                <p>{nombre}</p>
            </div>
        </div>
        </div>
    )
};

export default Ganador