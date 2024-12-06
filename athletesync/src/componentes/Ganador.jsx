import React from 'react';
import './Ganadores.css'



function Ganador({lugar, tiempo, nombre}){

    return(
        <div>
        <div className='Ganador'>
            <img alt='Foto ganador' className='imgGanador' src={''}/>
            <div className='textGanadores'>
                <p>{lugar}</p>
                <p>{tiempo}</p>
                <p>{nombre}</p>
            </div>
        </div>
        </div>
    )
};

export default Ganador