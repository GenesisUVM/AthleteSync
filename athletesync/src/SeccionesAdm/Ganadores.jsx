import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Adm.css'
import NavBar from '../componentes/NavBar';
import FooterAdm from '../componentes/FooterAdm';
import ContGanadores from '../componentes/ContGanadores';
import EnlaceTiempos from '../componentes/EnlaceTiempos';

//Seccion administrador

function Ganadores(){
    const [ganadores, setGanadores] = useState([]);

    useEffect(() => {
        const fetchGanadores = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/datosGanadores');
                setGanadores(response.data);
            } catch (error) {
                console.error('Error obteniendo los competidores', error);
            }
        };
        

        fetchGanadores();
    }, []);

   

    return(
        <div className='seccionGanadores'>
        <NavBar />
        {ganadores.length > 0 ? (
                ganadores.map(item => (
                    <ContGanadores 
                        key={item._id}
                        lugar={item.lugar} 
                        nombre={item.nombre} 
                    />
                ))
            ) : (
                <p>No hay registros disponibles.</p>
            )}
             <EnlaceTiempos />
        <FooterAdm />
        </div>
    )
};

export default Ganadores