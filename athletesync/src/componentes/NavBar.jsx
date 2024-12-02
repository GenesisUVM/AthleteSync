import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'
import logo from '../img/usuario.png'
import conf from '../img/configuracion.png'

function NavBar(){

    return(
        <nav className="navBar">
            <Link to={'/'}><img src={logo} className='logo' alt='logo'></img></Link>
            <h2 className='nombre'>Athelesync</h2>
            <Link to={'/configuracion'}><img src={conf} className='icon' alt='icono configuracion'></img></Link>
        </nav>
    )
};

export default NavBar