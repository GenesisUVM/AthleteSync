import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {registerCompetenciaRequest} from '../api/registerAuth.js'


function ModalForm() {
    
    /*Logica para enviar los datos del formulario a la base de datos */
    /*Logica para limpiar el formulario y mostrar un mensjae de exito si se registra correctamente */
    const { register, handleSubmit } = useForm();
    const [formData, setFormData] = useState({
        nombre: '',
        edad: '',
        competencia:'',
        metodo_pago:''
        
    });
    const [message, setMessage] = useState('');
    const [competencias, setCompetencias] = useState([]);
    const [selectedCompetencia, setSelectedCompetencia] = useState('');

/*select para la competencia en la que se esta registrando el usuario*/
    
useEffect(() => {
    const fetchCompetencias = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/datosCompetencia');
            setCompetencias(response.data); 
        } catch (error) {
            console.error("Error al obtener las competencias:", error);
        }
    };

    fetchCompetencias();
    }, []);

    const handleSelectChange = (event) => {
        setSelectedCompetencia(event.target.value);
    };
/*Opcion para que la fecha se mueestre solo el dia, mes y año*/
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString('es-ES', options); // Cambia 'es-ES' por el locale que necesites
    };

    const onSubmit = handleSubmit(async (values) => {
        console.log(values);
        
         const res = await registerCompetenciaRequest(values);
         console.log(res);

        // Limpia el formulario
        setFormData({
            nombre: '',
            edad: '',
            competencia:'',
            metodo_pago:''
            
            
        });

        // Muestra el mensaje de éxito
        setMessage('Registrado con éxito!');
        setTimeout(() => {
            setMessage('');
            onClose(); // Cierra el modal después de enviar
        }, 3000);
    });

    

   

    return (
        
            <div className="modalCont" >
                <form className='formModal' onSubmit={onSubmit}>
                    <label className='label'>Nombre del atleta<input type="text" name="nombre" className='inputsecond' {...register('nombre', { required: true })}  value={formData.nombre} /></label>
                    <label className='label'>Edad del atleta<input type="number" name="edad" className='inputsecond' {...register('edad', { required: true })}  value={formData.edad} /></label>
                    <label className='label'>Competencia a inscribirse <select className='categoria' value={selectedCompetencia} onChange={handleSelectChange}>
                    <option value="">Seleccione una competencia</option>
                    {competencias.map(competencia => (
                        <option key={competencia._id} value={competencia._id}>
                            {competencia.competencia} - {competencia.fecha ? formatDate(competencia.fecha) : 'Fecha no disponible'}
                        </option>
                    ))}
                    </select> </label>
                    <label>Selecciona Metodo de pago para Inscripcion
                        <select className='inputsecond' {...register('metodo_pago', { required: true })}  value={formData.metodo_pago}>
                            <option value="Tarjeta de credito">Tarjeta de Credito</option>
                            <option value="Tarjeta de debito">Tarjeta de Debito</option>
                            <option value="Transferencia Bancaria">Transferencia Bancaria</option>
                            <option value="Efectivo">Efectivo</option>
                        </select></label>
                    <button type="submit" className='boton'>Enviar</button>
                </form>
                <p>{message}</p>
            </div>
        
    );
}

export default ModalForm;