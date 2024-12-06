import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contenedores.css'



function ContCompetenciasCreadas({competencia, categoria, sexo, fecha,tiempo_limite,atletas}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/registroAthletas'); 
    };
    
    return(
        <div className='contCCreadas' onClick={handleClick}>
            <p className='textoCompetencias'>Competencia de {competencia}</p>
            <p className='textoCompetencias'>Fecha {fecha}</p>
            <p className='textoCompetencias'>Categoria de {categoria}</p>
            <p className='textoCompetencias'>Sexo {sexo}</p>
            <p className='textoCompetencias'>Lista de Competidores</p>
            <ul>
                {atletas.map(atleta => (
                    <li key={atleta._id}>
                        {atleta.nombre} - {atleta.edad} años
                    </li>
                ))}
            </ul>
            <p className='textoCompetencias'>Tiempo limite de inscripcion: {tiempo_limite}</p>
        
        </div>
    )
};

export default ContCompetenciasCreadas