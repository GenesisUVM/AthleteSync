//import { Link} from 'react-router-dom';
import React from 'react';
import './Forms.css'
import {useForm} from 'react-hook-form'


function FormAdm(){
    const { register, handleSubmit, formState: {errors}, } = useForm();

    const onSubmit = handleSubmit(async(data) => {
        console.log(data);
        
    })
    
    return(
        <form onSubmit={onSubmit} className="formAdm" >
            <label className='label'>Ingrese Correo<input type="email" name="usuario" className="input" {...register( 'correo', { require : true })}/></label>
            <label className='label'>Ingrese Contraseña<input type="text" name="contrasena" className="input"  /></label>
            <button type='submit' className="botonIngresar">Ingresar</button>
            {//<Link to={'/u'} className="botonIngresar">Ingresar</Link>
}
        </form>
    )
};

export default FormAdm