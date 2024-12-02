import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {registerCompetenciaRequest} from '../api/registerAuth.js'


function ModalForm({ isOpen, onClose }) {
    
    /*Logica para enviar los datos del formulario a la base de datos */
    /*Logica para limpiar el formulario y mostrar un mensjae de exito si se registra correctamente */
    const { register, handleSubmit } = useForm();
    const [formData, setFormData] = useState({
        nombre: '',
        edad: '',
        metodo_pago:''
        
    });
    const [message, setMessage] = useState('');

    if (!isOpen) return null;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const onSubmit = handleSubmit(async (values) => {
        console.log(values);
        
         const res = await registerCompetenciaRequest(values);
         console.log(res);

        // Limpia el formulario
        setFormData({
            nombre: '',
            edad: '',
            metodo_pago:''
            // Limpia otros campos según sea necesario
        });

        // Muestra el mensaje de éxito
        setMessage('Registrado con éxito!');
        setTimeout(() => {
            setMessage('');
            onClose(); // Cierra el modal después de enviar
        }, 3000);
    });

    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="modalCont" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <form className='formModal' onSubmit={onSubmit}>
                    <label className='label'>Nombre del atleta<input type="text" name="nombre" className='inputsecond' {...register('nombre', { required: true })} onChange={handleChange} value={formData.nombre} /></label>
                    <label className='label'>Edad del atleta<input type="number" name="edad" className='inputsecond' {...register('edad', { required: true })} onChange={handleChange} value={formData.edad} /></label>
                    <label>Selecciona Metodo de pago para Inscripcion
                        <select className='inputsecond' {...register('metodo_pago', { required: true })} onChange={handleChange} value={formData.metodo_pago}>
                            <option value="Tarjeta de credito">Tarjeta de Credito</option>
                            <option value="Tarjeta de debito">Tarjeta de Debito</option>
                            <option value="Transferencia Bancaria">Transferencia Bancaria</option>
                            <option value="Efectivo">Efectivo</option>
                        </select></label>
                    <button type="submit" className='boton'>Enviar</button>
                </form>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default ModalForm;