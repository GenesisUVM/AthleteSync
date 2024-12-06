import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Adm.css'
import NavBar from '../componentes/NavBar';
import FooterAdm from '../componentes/FooterAdm';
import ContCompetenciasCreadas from '../componentes/ContCompetenciasCreadas';

//Componente seccion Administrativa


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

    //Cambiar el formato de la fecha a solo dia, mes y año
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString('es-ES', options);
    };
    

    return(
        <div className='competenciasCreadas'>
        <NavBar />
        {competencia.length > 0 ? (
                competencia.map(item => (
                    <ContCompetenciasCreadas 
                        key={item._id}
                        competencia={item.competencia} 
                        categoria={item.categoria} 
                        sexo={item.sexo}
                        relevo={item.relevo}
                        fecha={formatDate(item.fecha)} 
                        tiempo_limite={formatDate(item.tiempo_limite)} 
                        
                    />
                ))
            ) : (
                <p>No hay registros disponibles.</p>
            )}
            
            <FooterAdm />
        </div>
    )
};

export default CompetenciasCreadas