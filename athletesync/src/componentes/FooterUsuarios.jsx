import React from 'react';
import { Link} from 'react-router-dom';
import enlace2 from '../img/calendario.png'
import enlace3 from '../img/copa.png'
import './Footer.css'


function FooterUsuarios(){
    return(
        <footer className="footerAdmi">
            <Link to={'/competenciasDisponibles'} ><img src={enlace2} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
            <Link to={'/competenciasFinalizadas'} ><img src={enlace3} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
        </footer>
    )
};

export default FooterUsuarios