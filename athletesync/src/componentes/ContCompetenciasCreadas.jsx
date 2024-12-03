import React from 'react';
import './Contenedores.css'



function ContCompetenciasCreadas({competencia, categoria, sexo, fecha,tiempo_limite, onClick }){
    
    return(
        <div className='contCCreadas' onClick={onClick}>
            <p className='textoCompetencias'>Competencia de {competencia}</p>
            <p className='textoCompetencias'>Fecha {fecha}</p>
            <p className='textoCompetencias'>Categoria de {categoria}</p>
            <p className='textoCompetencias'>Sexo {sexo}</p>
            <p className='textoCompetencias'>Lista de Competidores</p>
            <ul className='textoCompetencias'>
                {//list.map((competidor, index) => (
                //<li key={index}>{competidor}</li>
                //))
                }
            </ul>
            <p className='textoCompetencias'>Tiempo limite de inscripcion: {tiempo_limite}</p>
        
        </div>
    )
};

export default ContCompetenciasCreadas