import React from 'react';
import './Contenedores.css'



function ContCompetenciasCreadas({datosCompetencia}){
    let categoria = datosCompetencia.categoria
    let sexo = datosCompetencia.sexo 
    let tiempo = datosCompetencia.tiempo
    let list = datosCompetencia.competidores
    return(
        <div className='contCCreadas'>
            <p className='textoCompetencias'>Competencia de {categoria}</p>
            <p className='textoCompetencias'>Categoria {sexo}</p>
            <p className='textoCompetencias'>Lista de Competidores</p>
            <ul className='textoCompetencias'>
                {list.map((competidor, index) => (
                <li key={index}>{competidor}</li>
                ))}
            </ul>
            <p className='textoCompetencias'>Tiempo limite de inscripcion: {tiempo}</p>
        
        </div>
    )
};

export default ContCompetenciasCreadas