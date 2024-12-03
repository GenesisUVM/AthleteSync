import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Adm.css'
import NavBar from '../componentes/NavBar';
import FooterAdm from '../componentes/FooterAdm';
import ContCompetenciasCreadas from '../componentes/ContCompetenciasCreadas';

const natacion = {
    categoria: 'Natacion',
    sexo:'Femenino',
    competidores:['Indira Hassan','Camila Sanchez', 'Zoe Castro','Giulia Rossi','Thalia Cordero','Sarina Ortega'],
    tiempo:'27/11/24'
}
const atletismo = {
    categoria: 'Atletismo',
    sexo:'Masculino',
    competidores:['Sergio Romero','Andres Morales', 'Roberto Jimenez','Christian Ruiz','ALejandro Garcia','Miguel Torres'],
    tiempo:'15/12/24'
}


 function CompetenciasCreadas(){
    const [competencia, setCompetencia] = useState([]);

    useEffect(() => {
        const fetchCompetencia = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/datosCompetencia');
                setCompetencia(response.data);
            } catch (error) {
                console.error('Error obteniendo la competencia', error);
            }
        };

        fetchCompetencia();
    }, []);
    
    

    return(
        <div className='competenciasCreadas'>
        <NavBar />
        {competencia.length > 0 ? (
                competencia.map(item => (
                    <ContCompetenciasCreadas 
                        competencia={item.competencia} 
                        categoria={item.categoria} 
                        sexo={item.sexo}
                        relevo={item.relevo}
                        fecha={item.fecha} 
                        tiempo_limite={item.tiempo_limite} 
                    />
                ))
            ) : (
                <p>No hay registros disponibles.</p>
            )}<FooterAdm />
        </div>
    )
};

export default CompetenciasCreadas