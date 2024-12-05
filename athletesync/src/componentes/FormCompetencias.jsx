import React from 'react';
import './Forms.css'
import  { useState } from 'react';
import {useForm} from 'react-hook-form'
import {competenciaRequest} from '../api/compAuth.js'


function FormCompetencias(){

        /*Logica para limpiar el formulario y mostrar un mensjae de exito si se registra correctamente */
        const [formData, setFormData] = useState({
            competencia:'',
            categoria:'',
            sexo:'',
            relevo:'',
            fecha:'',
            tiempo_limite:''
        });
        const [message, setMessage] = useState('');
    
   //Funcionalidad del Select dinamico
    // OBjeto con los options de ambos select

    const competencias = [
        { value: 'Competencia de aguas abiertas', label: 'Competencia de aguas abiertas'},
        { value: 'Natacion', label: 'Natacion' },
        { value: 'Acuatlon', label: 'Acuatlon' },
        { value: 'Triatlon', label: 'Triatlon' },
        { value: 'Atletismo', label: 'Atletismo' }
      ];
      const categorias = [
        {value: 'Infatil 6-12', label:'Infantil 6-12'},
        {value: 'Juvenil 13-17', label:'Juvenil 13-17'},
        {value: 'Adulto 18-30', label:'Adulto 18-30'},
        {value: 'Aldulto 31-49', label:'Infantil 31-49'},
        {value: 'Aldulto 31-49', label:'Infantil 31-49'},
        {value: 'Aldulto 50-70', label:'Infantil 50-70 '},
        {value: 'Aldulto 71 en adelante', label:'Infantil 71 en adelante '},
      ]
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
            competencia:'',
            categoria:'',
            sexo:'',
            relevo:'',
            fecha:'',
            tiempo_limite:''
        });

        // Muestra el mensaje de éxito
        setMessage('Registrado con éxito!');
        
        //  Ocultar el mensaje después de unos segundos
        setTimeout(() => {
            setMessage('');
        }, 3000);
        })
    
    return(
   
            <form onSubmit={onSubmit} className='formCrearCompetencia'>
                <label>Selecciona el deporte de la Competencia</label>
                <select className='categoria' value={selectedOption} onChange={handleChange} {...register( 'competencia', { require : true })}>  
                <option value="">Selecciona una Categoría</option>
                    {competencias.map((option, index) => (
                        <option key={index} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </select>
                <label>Selecciona la Categoría</label>
                <select className='categoria' value={selectedOption} onChange={handleChange} {...register( 'categoria', { require : true })}>  
                <option value="">Selecciona una Categoría</option>
                    {categorias.map((option, index) => (
                        <option key={index} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </select>

                <label>Selecciona sexo de los competidores de la categoria</label>
                <select className='categoria' value={selectedOption} onChange={handleChange} {...register( 'sexo', { require : true })} >  
                <option value="">Selecciona una el Sexo</option>
                    {sexo.map((option, index) => (
                        <option key={index} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </select>
                <label>Selecciona si es una competencia de relevo</label>
                <select className='categoria' name="" id="" {...register( 'relevo', { require : true })} value={formData.relevo}> 
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </select>
                <label>Ingresa la fecha de la competencia<input className='categoria' typ e='date' {...register( 'fecha', { require : true })} value={formData.fecha}/></label>
                <label>Ingresa la fecha limite para inscribirse de la competencia<input className='categoria' typ e='date' {...register( 'tiempo_limite', { require : true })} value={formData.tiempo_limite}/></label>

                <button type='submit' className="botonCrear">Crear Competencia</button>
                
            </form>

            
     
    )
};

export default FormCompetencias