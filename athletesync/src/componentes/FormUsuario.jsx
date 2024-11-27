import React from 'react';
import { Link} from 'react-router-dom';
import './Forms.css'
import {useForm} from 'react-hook-form'


function FormUsuario(){
    const { register, handleSubmit, formState: {errors}, } = useForm();

    const onSubmit = handleSubmit(async(data) => {
        console.log(data);
        
    })
    return(
        <form onSubmit={onSubmit} className='formUsu'>
            <label className='label'>Ingrese Correo<input type="email" name="correo" className="input" {...register( 'correo', { require : true })}/></label>
            <label className='label'>Ingrese Contraseña<input type="text" name="contrasena" className="input" {...register( 'contrasena', { require : true })}/></label>
            <button type='submit' className="botonIngresar">Ingresar</button>
            <Link to={'/competenciasDisponibles'} className="botonIngresar">Ingresar</Link>
    
        </form>
    )
};

export default FormUsuario