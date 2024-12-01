import React from 'react';
import { useState } from 'react';
import './Usuario.css'
import NavBar from '../componentes/NavBar';
import FooterUsuarios from '../componentes/FooterUsuarios';
import ContCompetenciasCreadas from '../componentes/ContCompetenciasCreadas';
import ModalForm from '../componentes/ModalForm';

const natacion = {
    categoria: 'Natacion',
    sexo:'Femenino',
    competidores:['Indira Hassan','Camila Sanchez', 'Zoe Castro','Giulia Rossi','Thalia Cordero','Sarina Ortega'],
    tiempo:'27/11/24'
}


function CompetenciasDisponibles(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return(
        <div className='compDisponibles'>
        <NavBar />
        <ContCompetenciasCreadas datosCompetencia={natacion} onClick={openModal} />
        <ContCompetenciasCreadas datosCompetencia={natacion} onClick={openModal} />
        <ContCompetenciasCreadas datosCompetencia={natacion} onClick={openModal} />
        <ModalForm isOpen={isModalOpen} onClose={closeModal}/>
        <FooterUsuarios />
        </div>
    )
};

export default CompetenciasDisponibles