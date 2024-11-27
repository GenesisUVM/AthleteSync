import React from 'react';
import { Link} from 'react-router-dom';
import './Footer.css'
import adm from '../img/usuario.png'
import usuario from '../img/usuarios.png'

function Footer(){

    return(
        <footer className='footerIniSesion'>
            
                <Link to={'/'} className='navEnlace'><img src={adm} alt="link usuario administrador" className='imgIcons'/></Link>
                <Link to={'/usuarios'} className='navEnlace'><img src={usuario} alt="link usuarios clientes" className='imgIcons'/></Link>
            
        </footer>
    )
};

export default Footer