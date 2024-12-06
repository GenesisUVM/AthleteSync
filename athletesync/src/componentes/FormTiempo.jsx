import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Forms.css'
import {useForm} from 'react-hook-form'
import {registerTiempoRequest} from '../api/tiempoPost'


function FormTiempo(){
        const { register, handleSubmit, reset } = useForm();
        const [message, setMessage] = useState('');
        const [errorMessage, setErrorMessage] = useState('');
        const [competencias, setCompetencias] = useState([]);
        const [atletas, setAtletas] = useState([]);
        const [selectedCompetencia, setSelectedCompetencia] = useState('');
        const [selectedAtleta, setSelectedAtleta] = useState('');
        

        useEffect(() => {
           const fetchExistingCompetencias = async () => {
                try {
                    const response = await axios.get('http://localhost:4000/api/datosCompetencia'); 
                    setCompetencias(response.data);
                } catch (error) {
                    console.error("Error al obtener los registros existentes:", error);
                }
            };
            const fetchExistingAtletas = async () => {
                try {
                    const response = await axios.get('http://localhost:4000/api/datosRegisrosCompetencia'); 
                    setAtletas(response.data);
                } catch (error) {
                    console.error("Error al obtener los registros existentes:", error);
                }
            };
    
            fetchExistingCompetencias();
            fetchExistingAtletas();
        }, []);
    
   
        const handleSelectChangeComp = (event) => {
            setSelectedCompetencia(event.target.value);
        };
        const handleSelectChangeAtle = (event) => {
            setSelectedAtleta(event.target.value);
        };
      /*Registro del formulario*/
      
      const onSubmit = handleSubmit(async (values) => {
        console.log("Valores enviados:", values); 
    
        // Verificación de duplicados de las competencias 
        const isDuplicateComp = competencias.some(record => 
            record.competencia === selectedCompetencia &&
            record.nombre === values.nombre &&
            record.tiempo === values.tiempo
        );
    
        if (isDuplicateComp) {
            setErrorMessage('Este registro ya existe. Por favor, verifica los datos.');
            return;
        }
      
    
        try {
            const res = await registerTiempoRequest(values);
            console.log("Respuesta del servidor:", res); 
            reset(); 
            setMessage('Registrado con éxito!');
            setErrorMessage('');
            setTimeout(() => {
                setMessage('');
                // onClose(); 
            }, 3000);
        } catch (error) {
            console.error("Error al registrar la competencia:", error);
            setErrorMessage('Error al registrar la competencia. Inténtalo de nuevo.');
        }
    });
    
    return(
   
            <form onSubmit={onSubmit} className='formTiempo'>
                <label>Selecciona la Competencia en la que participo el atleta</label>
                <select className='categoria' onChange={handleSelectChangeComp}  {...register( 'competencia', { require : true })}>  
                <option value="">Selecciona una Competencia</option>
                    {competencias.map(competencia => (
                            <option key={competencia._id} value={competencia._id}>
                                {competencia.competencia}
                            </option>
                        ))}
                </select>
                <label>Selecciona el Nombre del atleta</label>
                <select className='categoria' onChange={handleSelectChangeAtle} {...register( 'nombre', { require : true })}>  
                <option value="">Selecciona nombre del atleta</option>
                    {atletas.map(atletas => (
                            <option key={atletas._id} value={atletas._id}>
                                {atletas.nombre}
                            </option>
                        ))}
                </select>
                <label>Ingresa el tiempo del atleta en la competencia<input className='categoria' type='text' {...register( 'tiempo', { require : true })} /></label>
        
                <button type='submit' className="boton">Crear Competencia</button>
                
            </form>

            
     
    )
};

export default FormTiempo