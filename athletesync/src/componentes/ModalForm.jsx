import React from 'react';
import './Forms.css'
import {useForm} from 'react-hook-form'
import {registerCompetenciaRequest} from '../api/registerAuth.js'


function ModalForm({ isOpen, onClose }){
    if (!isOpen) return null;

    /*Funcion Para registrar  al hacer click en el boton del formulario*/
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async(values) => {
        console.log(values);
        const res = await registerCompetenciaRequest(values)
        console.log(res)
    })
    
    return(
        <div className="modalOverlay" onClick={onClose}>
            <div className="modalCont" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <form className='formModal' onSubmit={onSubmit}>
                    <label className='label' htmlFor="">Nombre del atleta<input type="text" className='inputsecond' {...register( 'nombre', { require : true })}/></label>
                    <label className='label' htmlFor="">Edad del atleta<input type="text" className='inputsecond' {...register( 'edad', { require : true })}/></label>
                    <label className='label' htmlFor="">Selecciona Metodo de pago para Inscripcion<select name="" id="" className='inputsecond' {...register( 'metodo_pago', { require : true })}>
                        <option value="Tarjeta de credito">Tarjeta de Credito</option>
                        <option value="Tarjeta de debito">Tarjeta de Debito</option>
                        <option value="Transferencia Bancaria">Trasferencia Bancaria</option>
                        <option value="Efectivo">Efectivo</option>
                    </select></label>
                    <button type='submit' className='boton'>Registrar</button>
                </form>
            </div>
        </div>
    )
};

export default ModalForm