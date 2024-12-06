import React from 'react';
import { Link} from 'react-router-dom';
import mas from '../img/mas.png'

function EnlaceTiempos(){
    return(
        <div className='boton'>
            <Link to={'/registroTiempoAthletas'}>{mas}</Link>
        </div>
    )
};

export default EnlaceTiempos