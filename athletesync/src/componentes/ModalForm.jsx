import React from 'react';
import './Forms.css'
import {useForm} from 'react-hook-form'
import {registerRequest} from '../api/auth'


function ModalForm({ isOpen, onClose }){
    if (!isOpen) return null;

    /*Funcion Para registrar  al hacer click en el boton del formulario*/
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async(values) => {
        console.log(values);
        const res = await registerRequest(values)
        console.log(res)
    })
    
    return(
        <div className="modalOverlay" onClick={onClose}>
            <div className="modalCont" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <form className='formModal' onSubmit={onSubmit}>
                    <label className='label' htmlFor="">Nombre del atleta<input type="text" className='inputsecond'/></label>
                    <label className='label' htmlFor="">Edad del atleta<input type="text" className='inputsecond'/></label>
                    <label className='label' htmlFor="">Selecciona Metodo de pago para Inscripcion<select name="" id="" className='inputsecond'>
                        <option value="">Tarjeta de Credito</option>
                        <option value="">Tarjeta de Debito</option>
                        <option value="">Trasferencia Bancaria</option>
                        <option value="">Efectivo</option>
                    </select></label>
                    <button type='submit' className='boton'>Registrar</button>
                </form>
            </div>
        </div>
    )
};

export default ModalForm