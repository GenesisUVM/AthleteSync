import React, { useEffect, useState } from 'react';
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
//     const [competencia, setCompetencia] = useState([]);

//     useEffect(() => {
//         const fetchCompetencia = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/datosCompetencia');
//                 setCompetencia(response.data);
//             } catch (error) {
//                 console.error('Error obteniendo la competencia', error);
//             }
//         };

//         fetchCompetencia();
//     }, []);
    
    

    return(
        <div className='competenciasCreadas'>
        <NavBar />
        <ContCompetenciasCreadas datosCompetencia={natacion} />
        <ContCompetenciasCreadas datosCompetencia={atletismo} />
        <ContCompetenciasCreadas datosCompetencia={atletismo} />
        <FooterAdm />
        </div>
    )
};

export default CompetenciasCreadas