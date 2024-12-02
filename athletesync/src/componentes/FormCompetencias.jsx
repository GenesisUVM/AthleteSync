import React from 'react';
import './Forms.css'
import  { useState } from 'react';
import {useForm} from 'react-hook-form'
import {competenciaRequest} from '../api/compAuth.js'


function FormCompetencias(){

        /*Logica para limpiar el formulario y mostrar un mensjae de exito si se registra correctamente */
        const [formData, setFormData] = useState({
            categoria:'',
                sexo:'',
                relevo:''
        });
        const [message, setMessage] = useState('');
    
   //Funcionalidad del Select dinamico
    // OBjeto con los options de ambos select

    const categorias = [
        { value: 'Competencia de aguas abiertas', label: 'Competencia de aguas abiertas'},
        { value: 'Natacion', label: 'Natacion' },
        { value: 'Acuatlon', label: 'Acuatlon' },
        { value: 'Triatlon', label: 'Triatlon' },
        { value: 'Atletismo', label: 'Atletismo' }
      ];

      const sexo =[
        {value: 'Femenino', label: 'Femenino'},
        {value: 'Masculino', label: 'Masculino'},
        {value: 'Mixto', label: 'Mixto'},
      ]

      /*Funcionalidad de los selects*/
      const [selectedOption, setSelectedOption] = useState('');

      const handleChange = (event) => {
          setSelectedOption(event.target.value);
          
          const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
      };

  
    

      /*Registro del formulario*/
      const { register, handleSubmit } = useForm();

        const onSubmit = handleSubmit(async(values,event) => {
            console.log(values);
            const res = await competenciaRequest(values)
            console.log(res)

            event.preventDefault();

        setFormData({
            categoria:'',
            sexo:'',
            relevo:''
        });

        // Muestra el mensaje de éxito
        setMessage('Registrado con éxito!');
        
        //  Ocultar el mensaje después de unos segundos
        setTimeout(() => {
            setMessage('');
        }, 3000);
        })
    
    return(
        <div className='contForm'>
            <form onSubmit={onSubmit} className='formCrearCompetencia'>
                <label>Selecciona la Categoría</label>
                <select className='categoría' value={selectedOption} onChange={handleChange} {...register( 'categoria', { require : true })}>  
                <option value="">Selecciona una Categoría</option>
                    {categorias.map((option, index) => (
                        <option key={index} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </select>

                <label>Selecciona sexo de los competidores de la categoria</label>
                <select className='categoría' value={selectedOption} onChange={handleChange} {...register( 'sexo', { require : true })} >  
                <option value="">Selecciona una Categoría</option>
                    {sexo.map((option, index) => (
                        <option key={index} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </select>
                <label>Selecciona si es una competencia de relevo</label>
                <select name="" id="" {...register( 'relevo', { require : true })} value={formData.relevo}> 
                    <option value="true">Si</option>
                    <option value="false">No</option>
                </select>

                <button type='submit' className="botonCrear">Crear Competencia</button>
                
            </form>

            
        </div>
    )
};

export default FormCompetencias