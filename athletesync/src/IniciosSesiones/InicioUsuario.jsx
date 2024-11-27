import React from 'react';
import { Link} from 'react-router-dom';
import NavBar from "../componentes/NavBar"
import Footer from "../componentes/Footer"
import FormUsuario from "../componentes/FormUsuario"
import './InicioSesiones.css'

function InicioUsuarios(){

    return(
        <div className="inicioSesiones">
          <NavBar />
          <FormUsuario />
          <div className='contLink'>      
            <Link to={'/crearUsuario'} className="linkContraseña">Crear Usuario Nuevo</Link>
          </div>
          <Footer />
        </div>
    )
};

export default InicioUsuarios