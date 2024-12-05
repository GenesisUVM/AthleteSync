import React, {useState} from 'react';
import './Usuario.css'
import NavBar from '../componentes/NavBar';
import FooterUsuarios from '../componentes/FooterUsuarios';
import ContCompetenciasCreadas from '../componentes/ContCompetenciasCreadas';


const natacion = {
    categoria: 'Natacion',
    sexo:'Femenino',
    competidores:['Indira Hassan','Camila Sanchez', 'Zoe Castro','Giulia Rossi','Thalia Cordero','Sarina Ortega'],
    tiempo:'27/11/24'
}


function CompetenciasDisponibles(){
   

    return(
        <div className='compDisponibles'>
        <NavBar />
        <ContCompetenciasCreadas datosCompetencia={natacion} />
        <ContCompetenciasCreadas datosCompetencia={natacion} />
        <ContCompetenciasCreadas datosCompetencia={natacion} />

        <FooterUsuarios />
        </div>
    )
};

export default CompetenciasDisponibles