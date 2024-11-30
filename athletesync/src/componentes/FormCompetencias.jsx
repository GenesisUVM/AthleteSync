import React from 'react';
import './Forms.css'
import  { useState } from 'react';



function FormCompetencias(){
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

      const [selectedOption, setSelectedOption] = useState('');

      const handleChange = (event) => {
          setSelectedOption(event.target.value);
      };
    
    return(
        <div className='contForm'>
            <form  className='formCrearCompetencia'>
                <label>Selecciona la Categoría</label>
                <select className='categoría' value={selectedOption} onChange={handleChange}>  
                <option value="">Selecciona una Categoría</option>
                    {categorias.map((option, index) => (
                        <option key={index} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </select>

                <label>Selecciona sexo de los competidores de la categoria</label>
                <select className='categoría' value={selectedOption} onChange={handleChange}>  
                <option value="">Selecciona una Categoría</option>
                    {sexo.map((option, index) => (
                        <option key={index} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </select>
                <p>Selecciona si es una competencia de relevo</p>
                <label><input type="radio" value='definitely' checked/>SI</label>
                <label><input type="radio" value='maybe' />NO</label>
                
            </form>

            <button type='submit' className="botonCrear">Crear Competencia</button>
        </div>
    )
};

export default FormCompetencias