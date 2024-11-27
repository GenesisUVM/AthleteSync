import React from 'react';
import { Link} from 'react-router-dom';
import enlace1 from '../img/mas.png'
import enlace2 from '../img/calendario.png'
import enlace3 from '../img/copa.png'
import './Footer.css'


function FooterAdm(){
    return(
        <footer className="footerAdmi">
            <Link to={'/crearCompetencia'} ><img src={enlace1} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
            <Link to={'/competencias'} ><img src={enlace2} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
            <Link to={'/ganadores'} ><img src={enlace3} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
        </footer>
    )
};

export default FooterAdm