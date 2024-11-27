import React from 'react';
//import { Link} from 'react-router-dom';
import './Forms.css'
// import {useForm} from 'react-hook-form'
// import {registerRequest} from '../api/auth.js'


function FormCreaUsuario(){
    // const { register, handleSubmit } = useForm();

    // const onSubmit = handleSubmit(async(values) => {
    //     console.log(values);
    //     const res = await registerRequest(values)
    //     console.log(res)
    // })
    return(
        <form  className='formCrear'>
            <label className='label'>Ingrese Nombre<input type="text" name="nombre" className="input" /></label>
            <label className='label'>Ingrese Correo<input type="email" name="correo" className="input" /></label>
            <label className='label'>Ingrese Contraseña<input type="text" name="contrasena" className="input" /></label>
            <label className='label'>Ingrese Telefono<input type="number" name="telefono" className="input" /></label>
            <label className='label'>Ingrese Categoria en que compite<input type="text" name="rol" className="input" /></label>
            <button type='submit' className="botonIngresar">Ingresar</button>
            {//<Link to={''} className="botonIngresar">Registrar</Link>
            }
        </form>
    )
};

export default FormCreaUsuario