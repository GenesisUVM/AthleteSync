import React from 'react';
import { Link} from 'react-router-dom';
import './Forms.css'
import {useForm} from 'react-hook-form'
import {registerRequest} from '../api/auth'


function FormCreaUsuario(){
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async(values) => {
        console.log(values);
        const res = await registerRequest(values)
        console.log(res)
    })
    return(
        <form onSubmit={onSubmit} className='formCrear'>
            <label className='label'>Ingrese Nombre<input type="text" name="nombre" className="input" {...register( 'nombre', { require : true })}/></label>
            <label className='label'>Ingrese Correo<input type="email" name="correo" className="input" {...register( 'correo', { require : true })}/></label>
            <label className='label'>Ingrese Contraseña<input type="text" name="contrasena" className="input" {...register( 'contrasena', { require : true })}/></label>
            <label className='label'>Ingrese Telefono<input type="number" name="telefono" className="input" {...register( 'numero', { require : true })}/></label>
            <label className='label'>Ingrese Categoria en que compite<input type="text" name="categoria" className="input" {...register( 'categoria', { require : true })}/></label>
            <label className='label'>Ingrese rol<input type="text" name="rol" className="input" {...register( 'rol', { require : true })}/></label>
            <button type='submit' className="botonIngresar">Ingresar</button>
            <Link to={'/usuarios'} className="botonIngresar">Registrar</Link>
            
        </form>
    )
};

export default FormCreaUsuario