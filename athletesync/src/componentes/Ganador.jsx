import React from 'react';
import './Ganadores.css'



function Ganador(infGanadores){

    let foto = infGanadores.foto;
    let lugar = infGanadores.lugar;
    let tiempo = infGanadores.tiempo;
    let nombre = infGanadores.nombre;

    return(
        <div>
        <div className='Ganador'>
            <img alt='Foto ganador' className='imgGanador' src={foto}/>
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